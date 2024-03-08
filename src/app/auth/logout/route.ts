// wrote a logout route using supabase

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error(error);
		return NextResponse.redirect("/");
	}

	const redirectTo = request.nextUrl.clone();
	redirectTo.pathname = "/login";

	return NextResponse.redirect(redirectTo);
}
