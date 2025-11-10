import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="button logout bg-blue-500 w-[90px] h-[35px] rounded-lg text-stone-50 cursor-pointer"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
