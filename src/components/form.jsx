import React, { useState, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'

const Form = () => {
    const { control, handleSubmit, formState: { errors }, register, watch, setError, reset } = useForm()
    const passwordValue = watch('password')
    const [selectedGender, setSelectedGender] = useState('');
    const [showHidePWD, setShowHidePWD] = useState(false)
    const formRef = useRef()

    const handleFormSubmit = (data) => {

        alert(JSON.stringify({ ...data }))
        window.location.reload()
    }

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    return (
        <div style={{ color: "#333", width: "25rem" }} className='form-container'>
            <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>

                <div className='form-input_fields'>

                    <div className='form-fields'>
                        <label htmlFor="name">Name*</label>
                        <input type="name" placeholder='Enter your name'
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Name at least be 3 characters"
                                }
                            }

                            )}
                        />
                        <span className='err-msg'>{errors?.name && errors.name.message}</span>
                    </div>

                    <div className='form-fields'>
                        <label htmlFor="mobile">Mobile Number*</label>
                        <input type="mobile" placeholder='Enter your mobile number'
                            {...register('mobile', {
                                required: {
                                    value: true,
                                    message: "Mobile number is required",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Mobile number at least be 10 characters"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Maximum length  should be 10 digits   "
                                },
                                pattern: {
                                    value: /^-?\d+$/,
                                    message: "Invalid Mobile number"
                                }
                            }

                            )}
                        />
                        <span className='err-msg'>{errors?.mobile && errors.mobile.message}</span>
                    </div>
                </div>

                <div className='form-input_fields'>
                    <div className='form-fields'>
                        <label htmlFor="email">Email-ID*</label>
                        <input type={"text"} name='email' placeholder='Enter your email-id'
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: "Email-ID is required",
                                },
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: "Invalid  Email-ID"
                                }
                            })}
                        />
                        <span className='err-msg'>{errors?.email && errors.email.message}</span>
                    </div>

                    <div className='form-field' style={{ marginBottom: '0rem' }}>
                        <label htmlFor="developer">Your Role*</label>
                        <div className='form-field' style={{ marginBottom: '0.5rem' }}></div>
                        <Controller
                            control={control}
                            name='role'
                            render={({ field }) => <Select options={options} {...field} placeholder="Select a your role" styles={{ control: styles => ({ ...styles, borderRadius: "25px" }) }} />}
                            rules={{
                                required: " Your Role is required",
                            }}

                            {...register('role', { required: true })}
                        />
                        <span className='err-msg'>{errors?.role && errors.role.message}</span>
                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "0.5rem" }}>
                        <span>Gender*</span>
                    </div>
                    <div className='form-field_gender'>
                        <div>
                            <input {...register("gender", {
                                required: {
                                    value: true,
                                    message: "Gender is required"
                                }
                            })} type="radio" value="male" name='gender' />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input {...register("gender", {
                                required: {
                                    value: true,
                                    message: "Gender is required"
                                }
                            })} type="radio" value="female" name='gender' />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <input {...register("gender", {
                                required: {
                                    value: true,
                                    message: "Gender is required"
                                }
                            })} type="radio" value="others" name='gender' />
                            <label htmlFor="other">Others</label>
                        </div>
                    </div>
                </div>
                <div>
                    <span className='err-msg'>{errors?.gender && errors.gender.message}</span>
                </div>

                <div className='form-fields' style={{ marginTop: '1rem' }}>
                    <label htmlFor="password">Password*</label>
                    <input type={showHidePWD ? "text" : "password"} name='password' placeholder='Enter your password'
                        {...register('password', {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            pattern: {
                                value: /^(?=.*[^&*])(?=.*\d.*\d.*\d.*\d)(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z]).{8,}$/,
                                message: "Paassword should contain at least 1 special charcters , 4 numbers 2 captial case letters and 2 small  case charcters and maximum characters should be 8 eg: AShiq@2023"
                            }
                        }

                        )}
                    />
                    <span className='err-msg'>{errors?.password && errors.password.message}</span>
                </div>

                <div className='form-fields'>
                    <label htmlFor="confirmPassword">Confirm Password*</label>
                    <input type={showHidePWD ? "text" : "password"} name='confirmPassword' placeholder='Enter confirm password'
                        {...register('confirmPassword', {
                            required: {
                                value: true,
                                message: "Confirm Password is required",
                            },
                            validate: (value) => value === passwordValue || 'Passwords do not match'
                        }

                        )}
                    />
                    <span className='err-msg'>{errors?.confirmPassword && errors.confirmPassword.message}</span>
                </div>

                <div className='form-fields' style={{ flexDirection: 'row' }}>
                    <input type="checkbox" name="show" id="show" onChange={() => setShowHidePWD((prev) => !prev)} />
                    <label htmlFor="show">Show password</label>
                </div>

                <div className='submit-btn'>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

const options = [
    { label: 'Full stack developer ', value: 'full_stack_developer' },
    { label: 'Front end developer', value: 'front_end_developer' },
    { label: 'Back end developer', value: 'back_end_developer' }
]

export default Form