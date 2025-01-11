import FormInput from "@/components/FormInput";
import SubmitBtn from "@/components/SubmitBtn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loginUser } from "@/features/user/userSlice";
import { toast } from "@/hooks/use-toast";
import { ReduxStore } from "@/store";
import { customFetch } from "@/utils/customFetch";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import {
  ActionFunction,
  Form,
  Link,
  redirect,
  useNavigate,
} from "react-router-dom";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }: { request: Request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    try {
      const response: AxiosResponse = await customFetch.post(
        "/auth/local",
        data
      );
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      store.dispatch(loginUser({ username, jwt }));
      return redirect("/");
    } catch (error) {
      toast({ description: "Login failed" });
      return null;
    }
  };

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post("auth/local", {
        identifier: "mwtest@wp.pl",
        password: "secret",
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate("/");
    } catch (err) {
      toast({ description: "login failed" });
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="email" label="email" name="identifier" />
            <FormInput type="password" name="password" />

            <SubmitBtn text="login" className="w-full mt-4" />
            <Button
              type="button"
              variant="outline"
              onClick={loginAsGuestUser}
              className="w-full mt-4"
            >
              guest
            </Button>
            <p className="text-center mt-4 ">
              not a member yet?
              <Button type="button" asChild variant="link">
                <Link to="/register">register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Login;
