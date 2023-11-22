import MainInput from "../../components/MainInput";
import icon from "../../assets/images/search.svg";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {
  Error,
  InputDiv,
  StyledInput,
  MainContainer,
  CareerText,
  Line,
  Paragraph,
  InputGridContainer,
  Form,
  Label,
  SubmitButton,
  Img,
  Header,
} from "./Styles";
import Footer from "../../components/Footer";

const Career = () => {
  const SchemaValidation = yup.object({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("Invalid email format"),
    position: yup.string().required("position is required"),
    file: yup.mixed().test("fileRequired", "CV is required", (value: any) => {
      return value;
    }),
  });
  const methods = useForm({
    resolver: yupResolver(SchemaValidation),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      file: "",
    },
    mode: "all",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    watch,
  } = methods;

  const selectedFile: any = watch("file");
  const handleFileChange = (e: any) => {
    setValue("file", e.target.files[0]);
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("file");
    fileInput?.click();
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("position", data.position);
    if (data.file) {
      formData.append("file", data.file);
    }
    try {
      const response = await axios.post(
        "https://www.atms.ge/process.php",
        formData
      );
      if (response.status === 200) {
        reset();
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header>
        <CareerText>Career</CareerText>
        <Line></Line>
      </Header>
      <MainContainer>
        <Paragraph>
          Your next career move might be just around the corner – let's make it
          happen together!"
        </Paragraph>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGridContainer>
              <MainInput
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                label="Name"
                error={errors.name?.message}
              />
              <MainInput
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                label="Email"
                error={errors.email?.message}
              />
              <MainInput
                type="text"
                id="position"
                name="position"
                placeholder="Position"
                label="Position"
                error={errors.position?.message}
              />
              <InputDiv>
                <input
                  type="file"
                  id="file"
                  {...register("file")}
                  placeholder="Choose File"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <Label htmlFor="file">Upload your CV</Label>
                <StyledInput onClick={handleButtonClick}>
                  <p style={{ color: "#757599" }}>
                    {!selectedFile ? "Choose File" : selectedFile.name}
                  </p>
                </StyledInput>
                <Error>{errors.file?.message}</Error>
              </InputDiv>
              <Img src={icon} alt="icon" />
            </InputGridContainer>
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </FormProvider>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Career;
