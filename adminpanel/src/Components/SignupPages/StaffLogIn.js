
const StaffLogIn = ({ onToggleForm }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { AdminLoginPost } = useSelector((state) => state?.AdminLoginPost);
    console.log(AdminLoginPost?.message, "messssageeeeeeeeeee")
  
    useEffect(() => {
      if (AdminLoginPost?.message === "Login successful") {
        sessionStorage.setItem('sessionStaffId', AdminLoginPost?.data.staff.staff_id);
        sessionStorage.setItem('sessionStaffName', AdminLoginPost?.data.staff.staff_name);
        toast.success("Login Successfully")
        // console.log( AdminLoginPost?.data.staff.staff_id,"sesstion")
        dispatch(setInitialStateOfAdminLoginPost());
        setTimeout(() => navigate('/admin'), 1500)
        // navigate('/admin');
      }
      else if (AdminLoginPost?.message === "staff not found!") {
        toast.error("staff not found!")
        dispatch(setInitialStateOfAdminLoginPost());
  
      }
    }, [AdminLoginPost, navigate, dispatch]);
  
    const AdminLoginSubmit = (values, { resetForm }) => {
      console.log("Admin Login Values:", values);
  
      const data3 = {
        data: { ...values },
        method: "post",
        apiName: "staffLogin",
      };
      dispatch(actions.ADMINLOGINPOST(data3));
  
      resetForm();
    };
  
    return (
      <Formik
        initialValues={{ email: '', password: '' }}  // Updated to use `email`
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email format')
            .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
            .required('Email Required'),
  
          password: Yup.string().required('Password Required'),
        })}
        onSubmit={AdminLoginSubmit}
      >
        {({ errors, touched, handleChange, setFieldValue }) => (
          <Form>
            <Box >
              <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>STAFF LOGIN</h2>
              <CustomInputLogin
                name="email"  // Update name to `email`
                label="Email or Phone"
                custPlaceholder="Enter email or phone"
                inputType="text"
              />
              <CustomInputLogin
                name="password"
                label="Password"
                custPlaceholder="Enter password"
                inputType="password"
              />
              <Button fullWidth variant="contained" type="submit">
                Login
              </Button>
              <p style={{ textAlign: "center" }}>
                Not registered?{' '}
                <a href="#signup" onClick={onToggleForm}>
                  Signup here
                </a>
              </p>
            </Box>
            <ToastContainer
              position="top-right" // or "top-center", "bottom-left", etc.
              autoClose={1500} // Auto close duration in ms
              hideProgressBar={false} // Hide or show progress bar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </Form>
        )}
      </Formik>
    );
  };

  export default StaffLogIn
  