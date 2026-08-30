import { NavbarClient } from "./navbar-client";

export async function Navbar() {
  // Mock a custom user so you can view the logged-in state without signing in
  const mockUser = {
    id: "mock-123",
    email: "junaid@acme.com",
    user_metadata: {
      full_name: "Junaid Khan",
      avatar_url: "",
    },
  } as any;

  return <NavbarClient user={mockUser} />;
}