import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import Button from '../../src/components/Button';
import Input from '../../src/components/Input';
import { ErrorMessage, Formik } from 'formik'
import * as yup from 'yup'
import LogoButton from '../components/LogoButton';


const loginValidationSchema =
    yup.object({
        email: yup
            .string()
            .email()
            .required("Email is required field"),
        password: yup
            .string()
            .required("Password must be at least 6 characters")
            .min(6, "Password is too short - should be 6 chars minimum"),
    })

const handleSubmit = (values, { setSunmitting }) => {
    console.log(values, 'prininting');
    setSunmitting(true);
}
const printAction = () => {
    Keyboard.dismiss()
}

const LoginUser = () => {
    return (
        <ScrollView>
            <LogoButton />
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={printAction}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <Formik
                            validationSchema={loginValidationSchema}
                            initialValues={{ email: '', password: '' }}
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleChange, handleBlur, isSubmitting, handleSubmit, errors, touched, values }) => (
                                <View style={styles.container} >
                                    <Text style={styles.label}>Email</Text>
                                    <Input placeholder="janboon@gmail.com"
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        handleBlur={handleBlur}
                                        error={touched.email && errors.email} />
                                    <Text style={styles.label}>Password</Text>

                                    <Input
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        secureTextEntry
                                        placeholder="******************"
                                        error={touched.password && errors.password}
                                    />
                                    <Button onPress={handleSubmit} isSubmitting={isSubmitting} />
                                </View >
                            )}
                        </Formik>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}

export default LoginUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        PaddingHorizontal: 15,
    },
    label: {
        marginLeft: 22,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 9,
    }
})