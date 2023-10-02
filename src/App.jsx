import "./App.css";
import { useFormik } from "formik";
import { useWindowSize } from "@uidotdev/usehooks";

const App = () => {
  const size = useWindowSize();
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name cannot be empty";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name cannot be empty";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Looks like this is not an email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password cannot be empty";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",

      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <main className="bg-[#FF7978] image lg:h-screen lg:pb-0 lg:gap-[102px] pb-[70px] w-screen h-full flex lg:flex-row flex-col justify-center items-center">
        <div className="mt-[100px]">
          <h1 className="text-center lg:text-start text-white mx-[10px] text-[28px] lg:text-[50px] font-bold">
            Learn to code by <br /> watching others
          </h1>
          {size.width > 1440 ? (
            <p className="text-center font-medium mt-[25px] lg:text-[18px] lg:text-start text-[15px] text-white">
              See how experienced developers solve problems in real-time.<br />
              Watching scripted tutorials is great, but understanding how<br />
              developers think is invaluable.
            </p>
          ) : (
            <p className="text-center mt-[25px] lg:text-[18px] text-[15px] text-white">
              See how experienced developers solve <br /> problems in real-time.
              Watching <br />
              scripted tutorials is great, but <br /> understanding how
              developers think is <br />
              invaluable.
            </p>
          )}
        </div>
        <div className="mt-[50px]">
          <div className="text-white w-[327px] lg:w-[542px] lg:h-[60px] lg:shadow-2xl flex items-center rounded-xl justify-center h-[88px] bg-[#5D54A3]">
            {size.width > 1440 ? (
              <p className="font-bold  text-center px-[70px]">
                Try it free 7 days&nbsp;
                <span className="font-normal">then $20/mo. thereafter </span>
              </p>
            ) : (
              <p className="font-bold  text-center px-[70px]">
                Try it free 7 days&nbsp;
                <span className="font-normal">
                  then <br /> $20/mo. thereafter{" "}
                </span>
              </p>
            )}
          </div>
          <form
            className="bg-white mt-[25px] lg:h-[560px] lg:shadow-2xl rounded-xl p-2 flex flex-col lg:justify-normal justify-center items-center"
            onSubmit={formik.handleSubmit}
          >
            <div
              className={` relative flex flex-col lg:w-[460px] items-center w-[280px] mb-[20px] lg:mt-[20px] mt-[20px] ${
                formik.errors.firstName && formik.touched.firstName
                  ? "mb-[20px]"
                  : null
              } h-[55px]`}
            >
              <input
                className={`w-[280px] lg:w-[460px] min-h-[55px] font-bold lg:border-[2px] border mt-[20px] rounded-lg ${
                  formik.errors.firstName && formik.touched.firstName
                    ? "border-[#D18D8C]"
                    : null
                } pl-4`}
                placeholder="First Name"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName ? (
                <div className="error w-[25px] absolute left-[240px] lg:left-[400px] top-[35px] h-[25px]"></div>
              ) : null}

              {formik.errors.firstName && formik.touched.firstName ? (
                <div className="text-[#D18D8C] text-[12px]">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div
              className={` relative flex flex-col lg:w-[460px] items-center w-[280px] mb-[20px] lg:mt-[20px] mt-[20px] ${
                formik.errors.lastName && formik.touched.lastName
                  ? "mb-[20px] mt-[20px]"
                  : null
              } h-[55px]`}
            >
              <input
                className={`w-[280px] lg:w-[460px] min-h-[55px] font-bold lg:border-[2px] border mt-[20px] rounded-lg ${
                  formik.errors.lastName && formik.touched.lastName
                    ? "border-[#D18D8C]"
                    : null
                } pl-4 h-[55px]`}
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName ? (
                <div className="error w-[25px] absolute left-[240px] lg:left-[400px] top-[35px] h-[25px]"></div>
              ) : null}

              {formik.errors.lastName && formik.touched.lastName ? (
                <div className="text-[#D18D8C] text-[12px]">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
            <div
              className={` relative flex flex-col lg:w-[460px] items-center w-[280px] mb-[20px] lg:mt-[20px] mt-[20px] ${
                formik.errors.email && formik.touched.email ? "mb-[20px]" : null
              } h-[55px]`}
            >
              <input
                className={`w-[280px] lg:w-[460px] min-h-[55px] font-bold lg:border-[2px] border mt-[20px] rounded-lg ${
                  formik.errors.email && formik.touched.email
                    ? "border-[#D18D8C]"
                    : null
                } pl-4 h-[55px]`}
                placeholder={
                  formik.errors.email && formik.touched.email
                    ? "@example/com"
                    : "Email"
                }
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="error w-[25px] absolute left-[240px] lg:left-[400px] top-[35px] h-[25px]"></div>
              ) : null}

              {formik.errors.email && formik.touched.email ? (
                <div className="text-[#D18D8C] text-[12px]">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div
              className={` relative flex flex-col lg:w-[460px] items-center w-[280px] mb-[20px] lg:mt-[20px] mt-[20px] ${
                formik.errors.password && formik.touched.password
                  ? "mb-[36px]"
                  : null
              } h-[55px]`}
            >
              <input
                className={`w-[280px] lg:w-[460px] min-h-[55px] font-bold lg:border-[2px] border mt-[20px] rounded-lg ${
                  formik.errors.password && formik.touched.password
                    ? "border-[#D18D8C]"
                    : null
                } pl-4 h-[55px]`}
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="error w-[25px] absolute left-[240px] lg:left-[400px] top-[35px] h-[25px]"></div>
              ) : null}

              {formik.errors.password && formik.touched.password ? (
                <div className="text-[#D18D8C] text-[12px]">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="border-b-4 border-[#32B97E] hover:border-opacity-80 hover:opacity-80 transition-all ease-in-out duration-200  mt-4 flex flex-col  rounded-b-lg">
              <button
                type="submit"
                className="mt-[16px] lg:w-[460px]  min-h-[55px] rounded-t-lg centerText text-white font-bold uppercase w-[280px] h-[55px] bg-[#37CC8A]"
              >
                <p className="mt-[4px]">Claim your free trial</p>
              </button>
            </div>
            <div className="w-[280px] lg:w-[460px] text-center mt-1 h-[55px] ">
              <small className=" text-[14px] lg:text-[12px] text-[#CAC9D1] lg:mx-0 mx-4">
                By clicking the button, you are agreeing to our&nbsp;
                <span>
                  <a className="text-[#D57B7B] font-semibold" href="#">
                    Terms and Services
                  </a>
                </span>
              </small>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default App;
