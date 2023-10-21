import {z} from "zod";

const phoneSchema = z.boolean();

const result = phoneSchema.safeParse(true)

console.log(result);
