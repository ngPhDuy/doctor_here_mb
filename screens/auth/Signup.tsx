import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

import { signupUser } from "../../api/Auth";
import LoadingAnimation from "../../components/ui/LoadingAnimation";
import NotificationModal from "../../components/ui/NotificationModal";
import { validatePasswordStrength, validateUsername } from "../../utils/auth";
import { storeUsername } from "../../services/storage";

const Signup = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [isModalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(false); // true là thất bại, false là thành công
  const [failedReason, setFailedReason] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    const usernameError = validateUsername(username);
    const passwordError = validatePasswordStrength(password);

    if (usernameError) {
      setLoading(false);
      setFailedReason(usernameError);
      setStatus(true);
      setModalVisible(true);
      return;
    }

    if (passwordError) {
      setLoading(false);
      setFailedReason(passwordError);
      setStatus(true);
      setModalVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setLoading(false);
      setFailedReason("Mật khẩu không khớp");
      setStatus(true);
      setModalVisible(true);
      return;
    }

    // Nếu không có lỗi thì tiếp tục Gọi API tạo tài khoản
    const result = await signupUser(username, password, confirmPassword);

    if (result.success) {
      setStatus(false); // success
    } else {
      setFailedReason("tên đăng nhập đã tồn tại!");
      setStatus(true);
    }
    setLoading(false);

    setModalVisible(true);
  };

  return (
    <View className="flex-1 bg-white p-6 justify-center items-center">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          {/* Logo */}
          <Image
            source={require("../../assets/logo.png")}
            className="w-32 h-32"
          />
          <Text className="text-2xl font-bold mt-4">Doctor Here!</Text>
          <Text className="text-gray-500">Tạo tài khoản</Text>

          {/* Input Fields */}
          <View className="w-full mt-6">
            <View className="flex-row items-center border border-gray-300 px-2 py-5 rounded-xl">
              <FontAwesome
                name="user"
                size={20}
                color="gray"
                className="ml-3"
              />
              <TextInput
                className="ml-3 flex-1"
                placeholder="Tên đăng nhập"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            {username.length > 0 && (
              <Text
                className={`text-sm mt-1 ${
                  validateUsername(username)
                    ? "text-red-500"
                    : "text-green-600 font-semibold"
                }`}
              >
                {validateUsername(username)
                  ? validateUsername(username)
                  : "Tên đăng nhập hợp lệ!"}
              </Text>
            )}
            <View className="flex-row items-center border border-gray-300 px-2 py-5 mt-4 rounded-xl">
              <View className="flex-row items-center">
                <FontAwesome
                  name="lock"
                  size={20}
                  color="gray"
                  className="ml-3"
                />
                <TextInput
                  className="ml-3 flex-1"
                  placeholder="Mật khẩu"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={showPassword}
                />
              </View>
              {/* Show/Hide Password Icon */}
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-4"
              >
                <Feather
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {password.length > 0 && (
              <Text
                className={`text-sm mt-1 ${
                  validatePasswordStrength(password)
                    ? "text-red-500"
                    : "text-green-600 font-semibold"
                }`}
              >
                {validatePasswordStrength(password)
                  ? validatePasswordStrength(password)
                  : "Mật khẩu đủ mạnh!"}
              </Text>
            )}
            <View className="flex-row items-center border border-gray-300 px-2 py-5 mt-4 rounded-xl">
              <View className="flex-row items-center">
                <FontAwesome
                  name="lock"
                  size={20}
                  color="gray"
                  className="ml-3"
                />
                <TextInput
                  className="ml-3 flex-1"
                  placeholder="Nhập lại mật khẩu"
                  value={confirmPassword}
                  onChangeText={setconfirmPassword}
                  secureTextEntry={showConfirmPassword}
                />
              </View>
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4"
              >
                <Feather
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {confirmPassword.length > 0 &&
              (password !== confirmPassword ? (
                <Text className="text-sm text-red-500 mt-1">
                  Mật khẩu không khớp.
                </Text>
              ) : (
                <Text className="text-sm text-green-600 font-semibold mt-1">
                  Mật khẩu trùng khớp.
                </Text>
              ))}
          </View>

          {/* Login Button */}
          <TouchableOpacity
            className="bg-blue-500 w-full p-3 rounded-full mt-6"
            onPress={() => handleSignup()}
          >
            <Text className="text-white text-center font-bold">
              Tạo tài khoản
            </Text>
          </TouchableOpacity>

          {/* Social Login */}
          <View className="h-[1px] w-full my-8 bg-gray-300" />
          {/* <TouchableOpacity className="border border-gray-300 w-full p-3 rounded-xl flex-row items-center justify-center mb-3">
        <Image
          source={require("../../assets/google.png")}
          className="w-5 h-5 mr-2"
        />
        <Text>Tạo tài khoản với Google</Text>
      </TouchableOpacity>
      <TouchableOpacity className="border border-gray-300 w-full p-3 rounded-xl flex-row items-center justify-center">
        <Image
          source={require("../../assets/facebook.png")}
          className="w-5 h-5 mr-2"
        />
        <Text>Tạo tài khoản với Facebook</Text>
      </TouchableOpacity> */}

          <View className="mt-3 flex-row items-center">
            <Text>Bạn đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-blue-500">Hãy đăng nhập</Text>
            </TouchableOpacity>
          </View>

          {/* Hiển thị modal thông báo */}
          <NotificationModal
            visible={isModalVisible}
            //nếu time là 09:00 AM thì type là error ngược lại
            type={status ? "error" : "success"}
            message={
              status
                ? `Đăng ký thất bại, ${failedReason}`
                : `Bạn đã tạo tài khoản thành công.`
            }
            onClose={async () => {
              if (status) {
                setModalVisible(false);
              } else {
                setModalVisible(false);
                await storeUsername(username);
                navigation.navigate("CreateProfile");
              }
            }}
          />
        </>
      )}
    </View>
  );
};

export default Signup;
