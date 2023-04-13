import { createClient } from "@supabase/supabase-js";

/**
 * 
 * @returns A SupaBase Client connected to the Database
 */
function connectSupaBase() {
	const supabaseUrl: string = 'https://zluqgjkxodwjmkfnppyr.supabase.co'
	const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdXFnamt4b2R3am1rZm5wcHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyODk0NDQsImV4cCI6MTk5Njg2NTQ0NH0.-73kdnKGSpjvxMAJDetmkoOTxrbEC-GYmDKBm5K9jVU"
	const supabase = createClient(supabaseUrl, supabaseKey)
	return supabase;
}

/**
 * 
 * @param values A object with all propriety and their values to be inserted into the Database, 
 * propriety must match column name of database to be inserted with sucess. 
 * @return True if values are inserted with sucess, false if a error happened
*/
export default async function insertDB(values: object) {
	const supabase = connectSupaBase();
	const response = await supabase.from('hrnet').insert(values)
	if (response.status === 201) { return true } else { return false }
}