import { z } from "zod"

//期待している値
const userSchema = z.object({
  email: z.string().email(),
  userName: z.string(),
  phone: z.number(),
})

const addressSchema = z.object({
  street: z.string(), 
  city: z.string()
})

const citizenSchema = userSchema.merge(addressSchema)

//定義したvalidationSchemaから型を作成
type citizenType = z.infer<typeof citizenSchema>

const citizenData: citizenType = {
  email: "email@email.com", 
  userName: "wewe00",
  phone: 12345012345,
  street: "123 red street", 
  city: "london"
}

//データvalidation
citizenSchema.parse(citizenData)
