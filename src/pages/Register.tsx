import FormInput from "@/components/FormInput";
import SubmitBtn from "@/components/SubmitBtn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/utils/customFetch";
import { AxiosError } from "axios";
import { ActionFunction, Form, Link, redirect } from "react-router-dom";

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  try {
    // const result =
    await customFetch.post("/auth/local/register", data);
    toast({ description: "registered" });
    return redirect("/login");
  } catch (error) {
    const errorMsg =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : "unknown registered error";
    toast({ description: errorMsg });
    return null;
  }
};
const registerAsGuestUser = () => {
  console.log("registerAsGuestUser user");
};
function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted ">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>

        <CardContent>
          <Form method="post">
            <FormInput type="text" name="username" />
            <FormInput type="text" name="email" />
            <FormInput type="text" name="password" />
            <SubmitBtn text="register" className="w-full mt-4" />
            <Button
              type="button"
              variant="outline"
              onClick={registerAsGuestUser}
              className="w-full mt-4"
            >
              guest
            </Button>
            <p className="text-center mt-4 ">
              Already a member?
              <Button type="button" asChild variant="link">
                <Link to="/login">login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
