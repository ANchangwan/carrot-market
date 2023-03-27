import { useState } from "react";
// import { useMutation } from "@libs/client/useMutation";

interface useMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

type useMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): useMutationResult<T> {
  const [state, setState] = useState<useMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  function mutation(data?: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) =>
      response
        .json()
        .catch(() => {})
        .then((json) => setData(json))
        .catch(setError)
        .finally(() => setLoading(false))
    );
  }
  return [mutation, { loading, data, error }];
}
