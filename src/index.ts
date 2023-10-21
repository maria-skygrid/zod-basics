import { z } from "zod"

//期待している値
const userSchema = z.object({
  email: z.string().email(),
  userName: z.string(),
  phone: z.number(),
})

//ユーザー入力と比較
userSchema.parse({
  email: "mmm00@gmal.com",
  userName: "12ma",
  phone: 234, 
  age: 30
})
