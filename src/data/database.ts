import { createClient } from "@supabase/supabase-js";

/**
 * 
 * @returns A SupaBase Client connected to the Database
 */
function connectSupaBase() {
	const supabaseUrl: string = 'https://zluqgjkxodwjmkfnppyr.supabase.co';
	const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdXFnamt4b2R3am1rZm5wcHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyODk0NDQsImV4cCI6MTk5Njg2NTQ0NH0.-73kdnKGSpjvxMAJDetmkoOTxrbEC-GYmDKBm5K9jVU";
	const supabase = createClient(supabaseUrl, supabaseKey);
	return supabase;
}

/**
 * @param values An object containing all properties and their corresponding values to be inserted into the database.
 * @return True if the values were inserted successfully, false if an error occurred.
*/
export default async function insertDB(values: object) {
	const supabase = connectSupaBase();
	const response = await supabase.from('hrnet').insert(values);
	if (response.status === 201) { return true; }
	return false;
}

/**
 * @returns Return all data from the database as a array of object or return false if the operation fails.
 */
export async function readDB() {
	const supabase = connectSupaBase();
	const response = await supabase.from('hrnet').select('*');
	const responseData = response.data ?? false;
	if (responseData && response.status === 200) { return responseData; };
	return false;
}