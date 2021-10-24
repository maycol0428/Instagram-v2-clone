import React from "react";
import { getProviders, signIn as signInProvider } from "next-auth/react";
import Header from "../../components/Header";
import { useRouter } from "next/dist/client/router";

// browser..
const signIn = ({ providers }) => {
  const router = useRouter();
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
          className="w-80"
          src="https://links.papareact.com/ocw"
          alt="instagram"
        />
        <p>This is not a REAL app, it is build for educational purposes only</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => {
                  signInProvider(provider.id, {
                    callbackUrl: router.query.callbackUrl,
                  });
                }}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;
