// a hook called isUserLoggedIn that checks if the user is logged in through supabase and returns data about the user


import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function isUserLoggedIn() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return false
  }
  return { ...data.user }

}