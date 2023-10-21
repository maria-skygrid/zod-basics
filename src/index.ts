import { z } from "zod"

//期待している値
const userSchema = z.object({
  email: z.string().email(),
  userName: z.string(),
  phone: z.number(),
})

//定義したvalidationSchemaから型を作成
type userType = z.infer<typeof userSchema>

const userInput: userType = {
  email: "mmm00@gmail.com",
  userName: "12ma",
  phone: 234, 
}

//ユーザー入力と比較
userSchema.parse(userInput)
