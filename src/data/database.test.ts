import { createClient } from "@supabase/supabase-js";
import insertDB, { readDB } from "./database";

describe('Database Tests', () => {
	test('Read Data Successfully', async () => {
		const result = await readDB();
		expect(result).toBeTruthy();
	});

	test('Insert Data Successfully', async () => {
		const result = await insertDB({
			"firstName": "TOTO",
			"lastName": "MOMO",
			"city": "A city",
			"zipCode": "59140",
			"street": "A street",
			"state": "Arkansas",
			"departement": "Engineering",
			"birthDate": "2023-04-29T22:00:00.000Z",
			"startDate": "2023-04-16T22:00:00.000Z"
		});
		expect(result).toBeTruthy();
	});

	test('Insert Data Fail', async () => {
		const result = await insertDB({randomWrongColum: "Wrong Column"});
		expect(result).toBeFalsy();
	});

	test('Read Database UnSuccessfully', async () => {
		jest.spyOn(require('@supabase/supabase-js'), 'createClient').mockReturnValue({
			from: () => ({
				select: () => ({
					data: null,
					error: 'Unable to read data from the database',
					status: 500,
				}),
			}),
		});

		const result = await readDB();
		expect(result).toBeFalsy();
	});

});