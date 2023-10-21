import { z } from "zod"

//期待している値
const userSchema = z.object({
  email: z.string().email(),
  userName: z.string(),
  phone: z.number(),
})


//データvalidation
userSchema.parse({
  email: "email@email.com", 
  userName: "wewe00",
  phone: 12345012345,
})
