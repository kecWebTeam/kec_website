import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">Login to your account</h1>
          <div className="mt-2 w-40 h-1 rounded-full bg-[rgb(14,110,74)]"></div>
          </div>
          <p className="text-lg text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="email" className="text-lg">
            Email
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="bg-background text-lg h-12"
          />
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password" className="text-lg">
              Password
            </FieldLabel>
            <a
              href="#"
              className="ml-auto text-base underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          <Input
            id="password"
            type="password"
            required
            className="bg-background text-lg h-12"
          />
        </Field>

        <Field>
          <Button type="submit" className="h-12 text-lg font-semibold">
            Login
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center text-base">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}