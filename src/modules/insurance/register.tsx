import { connectToDB, menu, router, user } from "@core";
import { Insurance, insurances, insuranceNamespace } from "@modules";
import * as React from "react";

export const registerInsurance = {
  register: async () => {
    router.register({
      namespace: insuranceNamespace,
      regex: /^insurances/,
      component: async () => {
        const Component = (await import("./components/page.insurance"))
          .Insurances;
        return <Component />;
      },
      condition: () => user.currentUser.canViewInsurance
    });

    menu.items.push({
      icon: "PaymentCard",
      name: insuranceNamespace,
      onClick: () => {
        router.go([insuranceNamespace]);
      },
      order: 5,
      url: "",
      key: insuranceNamespace,
      condition: () => user.currentUser.canViewInsurance
    });
    await ((await connectToDB(insuranceNamespace, insuranceNamespace)) as any)(
      Insurance,
      insurances
    );
    return true;
  },
  order: 3
};
