//import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../constants/constants";
import * as Yup from "yup";
import styles from "./signup.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signUpFetch } from "../../api/signup";
import { useMutation } from "@tanstack/react-query";
import { useNoAuth } from "../../hooks/useNoAuth";

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Некорректный email*")
    .required("Обязательное поле*"),
  password: Yup.string().required("Обязательное поле"),
});

export const SignUp = () => {
  const navigate = useNavigate();
  useNoAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: async (values) => {
      const res = signUpFetch(values);
      const responce = await res.json();
      if (res.ok) {
        localStorage.setItem(TOKEN, responce.token);
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
      <h1 className={styles.title}>Регистрация</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={mutateAsync}
        validationSchema={SignUpSchema}
      >
        <Form className={styles.form}>
          <Field
            className={styles.field}
            id="email"
            name="email"
            placeholder="sobakajret@mail.com"
            type="email"
          />
          <div className={styles.error1}>
            <ErrorMessage name="email" />
          </div>

          <Field
            className={styles.field}
            id="password"
            name="password"
            placeholder="Пароль"
            type="password"
          />
          <div className={styles.error2}>
            <ErrorMessage name="password" />
          </div>

          <button className={styles.button} type="submit">
            Зарегистрироваться
          </button>
        </Form>
      </Formik>
      <div className={styles.subquestion}>
        <p className={styles.subquestion__text}>Уже зарегистрированы?</p>
        <Link className={styles.subquestion__link} to="/signin">
          Войти
        </Link>
      </div>
    </div>
  );
};
