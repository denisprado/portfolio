"use server";

import configPromise from "@payload-config";
import { handleServerFunctions } from "@payloadcms/next/layouts";
import type { ServerFunctionClientArgs } from "payload";

import { importMap } from "./admin/importMap";

export async function serverFunction(args: ServerFunctionClientArgs) {
	return handleServerFunctions({
		...args,
		config: configPromise,
		importMap,
	});
}
