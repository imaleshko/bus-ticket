import "./commands";
import "@cypress/code-coverage/support";
import { MemoryRouter } from "react-router";
import { AuthProvider } from "@/context/AuthContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mount } from "cypress/react";

Cypress.Commands.add("mount", mount);
Cypress.Commands.add("mountWithWrappers", (component, options = {}) => {
  const { routerProps = { initialEntries: ["/"] }, ...mountOptions } = options;
  const queryClient = new QueryClient();
  const wrapped = (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MemoryRouter {...routerProps}>
          {component}
        </MemoryRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
  return mount(wrapped, mountOptions);
});
