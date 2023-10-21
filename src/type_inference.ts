import {z} from "zod";

const userSchema = z.object({
  username: z.string(), 
  email: z.string().email(),
  phone: z.number()
})

//定義したschemaから型を制作
type userType = z.infer<typeof userSchema>

//
const userData: userType = {
  username: "lola", 
  email: "lolalola@gmail.com",
  phone: 123
}

//validate
userSchema.parse(userData)