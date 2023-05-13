import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  useToast,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export default function Incubator() {
  const [incubatorFormData, setIncubatorFormData] = useState({
    microplates: "44",
    tempRange: "",
    humidityRange: "",
    incubatorPlacement: "",
    externalControlBox: "false",
  });

  const formSubmitDisable =
    !incubatorFormData.microplates ||
    !incubatorFormData.tempRange ||
    !incubatorFormData.humidityRange ||
    !incubatorFormData.incubatorPlacement;

  const handleChange = (e) => {
    setIncubatorFormData({
      ...incubatorFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNumberChange = (name, value) => {
    setIncubatorFormData({
      ...incubatorFormData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(incubatorFormData);
  }, [incubatorFormData]);

  useEffect(() => {
    if (
      incubatorFormData.incubatorPlacement !== "BT" &&
      incubatorFormData.incubatorPlacement !== "SA"
    ) {
      setIncubatorFormData({
        ...incubatorFormData,
        externalControlBox: "false",
      });
    }
  }, [incubatorFormData.incubatorPlacement]);

  return (
    <>
      <Layout
        title="Select Incubator"
        description="Looking for the Perfect Automated Incubator for your Startup? Discover the Top Selection of Incubators for Entrepreneurs. Find the Ideal Automated Incubator With our App to Accelerate your Business Growth and Success."
        keywords="automated incubator, startup incubator, automated startup support, AI-powered incubator, tech incubator, digital incubator, automated mentorship, funding automation, business growth automation, startup resources automation"
      >
        <div className="flex justify-center items-center w-screen ">
          {/* SELECT INCUBATOR FORM */}
          <Container
            action="#"
            className="space-y-8 overflow-y-auto md:mt-12"
            padding={5}
          >
            <h1 className="text-2xl font-bold flex justify-center">
              Please Input Incubator Details
            </h1>
            <FormControl isRequired>
              <FormLabel className="mb-2 text-base font-medium">
                Number of Microplates
              </FormLabel>
              <NumberInput
                step={1}
                defaultValue={44}
                value={incubatorFormData.microplates}
                min={1}
                max={1000}
                size="lg"
                variant="filled"
                focusInputOnChange={false}
                focusBorderColor="gray.50"
                bgColor="gray.50"
                name="microplates"
                onChange={(value) => handleNumberChange("microplates", value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl isRequired className="w-full">
              <FormLabel className="mb-2 mt-5 text-base font-medium">
                Required Temperature Range
              </FormLabel>

              <Flex gap={4}>
                <Select
                  className="select-input"
                  id="tempRange"
                  name="tempRange"
                  value={incubatorFormData.tempRange}
                  placeholder="Select Temp"
                  required
                  onChange={handleChange}
                  focusBorderColor="gray.50"
                  bgColor="gray.50"
                  size={"lg"}
                >
                  <option value="1">-20-0°C</option>
                  <option value="2">04-25°C</option>
                  <option value="3">04-50°C</option>
                  <option value="4">33-50°C</option>
                </Select>
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <FormLabel className="mb-2 text-base font-medium">
                Required Humidity
              </FormLabel>
              <Select
                className="select-input"
                id="humidityRange"
                name="humidityRange"
                value={incubatorFormData.humidityRange}
                placeholder="Select Humidity"
                required
                onChange={handleChange}
                focusBorderColor="gray.50"
                bgColor="gray.50"
                size={"lg"}
              >
                <option value="1">02-50%</option>
                <option value="2">04-50%</option>
                <option value="3">10-95%</option>
                <option value="4">90-95%</option>
                <option value="5">max 90%</option>
                <option value="6">max 95%</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel className="mb-2 text-base font-medium">
                Incubator Placement
              </FormLabel>
              <Select
                className="select-input"
                id="incubatorPlacement"
                name="incubatorPlacement"
                value={incubatorFormData.incubatorPlacement}
                placeholder="Select Placement"
                required
                onChange={handleChange}
                focusBorderColor="gray.50"
                bgColor="gray.50"
                size={"lg"}
              >
                <option value="BT">Bench Top</option>
                <option value="SA">Stand Alone</option>
                <option value="IT">Internal</option>
              </Select>
            </FormControl>
            {/* CONDITION IF SA OR BT SELECTED TO HAVE EXTERNAL CONTROL BOX */}
            {(incubatorFormData.incubatorPlacement === "BT" ||
              incubatorFormData.incubatorPlacement === "SA") && (
              <FormControl>
                <FormLabel className="mb-2 text-base font-medium">
                  Control Box
                </FormLabel>
                <RadioGroup
                  name="externalControlBox"
                  onChange={(value) => handleNumberChange("externalControlBox", value)}
                  value={incubatorFormData.externalControlBox}
                >
                  <Stack direction="row" width={"full"} className="w-full flex justify-around">
                    <Radio value="false">Internal</Radio>
                    <Radio value="true">External</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            )}

            <div className="w-full flex justify-center gap-10">
              {/* <Button
                    aria-label="Form Submit Button"
                    // isDisabled={formSubmitDisable}
                    className="w-44"
                    // isLoading={contactState.isLoading}
                    // onClick={handleSubmit}
                    colorScheme="gray"
                    backgroundColor="rgb(29 78 216)"
                    _hover={{
                      backgroundColor:"rgb(30 64 175)"
                    }}
                    color="white"
                  >
                    Cancel
                  </Button> */}

              <Button
                aria-label="Form Submit Button"
                // isDisabled={formSubmitDisable}
                className="w-[15rem] mb-14"
                // isLoading={contactState.isLoading}
                loadingText="Submitting"
                // onClick={handleSubmit}
                backgroundColor="rgb(249 115 22)"
                color="rgb(255 255 255)"
                _hover={{
                  backgroundColor: "rgb(234 88 12)",
                }}
              >
                Submit
              </Button>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}
