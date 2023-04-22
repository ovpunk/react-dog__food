//import { useEffect, useState } from "react";
import { UserInfo } from "../../components/UserInfo/index";
import { userInfoFetch } from "../../api/userinfo";
import { useQuery } from "@tanstack/react-query";

export const PersonalAccount = () => {
  const {
    data: info,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await userInfoFetch();
      const responce = await res.json();
      if (res.ok) {
        return responce;
      }
    },
  });
  if (isError) {
    return <p>Произошла ошибка {error}</p>;
  }
  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <UserInfo info={info} />
      {error && <p>{error}</p>}
    </div>
  );
};
