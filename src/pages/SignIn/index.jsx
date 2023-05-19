import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signInFetch } from "../../api/signin";

import styles from "./signin.module.css";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUpUser } from "../../redux/slices/userSlice";
import { useNoAuth } from "../../hooks/useNoAuth";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Некорректный email*")
    .required("Обязательное поле*"),
  password: Yup.string().required("Обязательное поле*"),
});

export const SignIn = () => {
  useNoAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: async (values) => {
      const res = await signInFetch(values);
      if (res.ok) {
        const responce = await res.json();
        dispatch(setUpUser({ ...responce.data, token: responce.token }));
        return navigate("/products");
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
    <div className={styles.container}>
      <h1 className={styles.title}>Вход</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={mutateAsync}
        validationSchema={SignInSchema}
      >
        <Form className={styles.form}>
          <Field
            className={styles.field}
            name="email"
            placeholder="sobakajret@mail.com"
            type="email"
          />
          <div className={styles.error1}>
            <ErrorMessage name="email" />
          </div>

          <Field
            className={styles.field}
            name="password"
            placeholder="Пароль"
            type="password"
          />
          <div className={styles.error2}>
            <ErrorMessage name="password" />
          </div>

          <button className={styles.button} type="submit">
            Войти
          </button>
        </Form>
      </Formik>
      <div className={styles.subquestion}>
        <p className={styles.subquestion__text}>Нет аккаунта?</p>
        <Link className={styles.subquestion__link} to="/signup">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};
