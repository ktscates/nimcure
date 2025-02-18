"use client";

import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/patients");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-between items-center bg-white p-8 relative z-0 shadow-md">
        <div className="mb-6">
          <Image src="/images/logo.png" alt="Logo" width={58} height={58} />
        </div>
        <form className="w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-8 text-dark">
            Sign in to continue
          </h2>
          <div className="mb-4">
            <Input
              customStyle="w-full px-4 py-4"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4 relative">
            <Input
              customStyle="w-full px-4 py-4"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center mb-6 mt-6">
            <label className="flex items-center text-dark text-sm">
              <input type="checkbox" className="mr-2 text-sm" /> Remember Me
            </label>
            <Link href="#" className="text-dark_blue text-sm font-bold">
              Forgot Password?
            </Link>
          </div>
          <Button
            type="button"
            onClick={handleLogin}
            text="Login"
            className="mt-16 w-full font-semibold text-xl text-white bg-blue py-4 hover:bg-blue hover:bg-opacity-80"
          />
        </form>
        <Image src="/images/footer.png" alt="logo" width={166} height={23} />
      </div>

      <div className="w-1/2 bg-blue-600 flex flex-col justify-center text-white relative">
        <Image
          src="/images/illustration.png"
          alt="City Background"
          className="w-screen h-screen object-cover"
          width={1000}
          height={1000}
        />

        <Image
          src="/images/duck.svg"
          alt="Login Image"
          width={300}
          height={300}
          className=" absolute bottom-44 -left-20"
        />

        <div className="absolute bottom-5 px-32">
          <h2 className="text-[28px] text-left font-extrabold mt-6 z-10">
            Serving Patients During a Pandemic
          </h2>
          <p className="text-left text-base font-normal mt-2 max-w-lg z-10">
            Delivering essential medication to NIMR patients with adherence to
            quality of service, care, and confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
}
