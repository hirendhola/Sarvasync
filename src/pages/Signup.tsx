import SignUpForm from "@/components/auth/SignUpForm";

const Signup = () => {
  return (
    <main className="max-w-screen min-h-screen bg-white">
      <section className="main flex flex-col lg:flex-row h-screen w-full">
        <section className="bg-secondary-foreground right w-full lg:w-[60%] h-full hidden lg:flex flex-col justify-center items-center text-primary-foreground">
          <div className="text-center">
            <img
              src="/hero-icon.png"
              alt="SarvaSync Logo"
              className="mx-auto h-16 w-auto mb-8 invert"
              width={150}
              height={64}
            />
            <div className="w-full h-fit p-2 flex justify-center items-center flex-col">
              <h1 className="text-3xl font-semibold mb-4 text-center">
                Connect once. Post everywhere.
              </h1>

              <p className="text-lg max-w-md self-center">
                AI-powered cross-platform social media publishing
              </p>
            </div>
          </div>
        </section>

        <section className="left w-full lg:w-[40%] h-full flex justify-center items-center p-8 bg-primary-foreground">
          <SignUpForm />
        </section>
      </section>
    </main>
  );
};

export default Signup;
