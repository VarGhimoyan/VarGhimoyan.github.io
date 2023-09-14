import React, { Component } from "react";
import UserDataService from "../services/user.service";
import { withRouter } from "../common/with-router";
import { Link, useNavigate } from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props);
        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.saveTutorial = this.saveTutorial.bind(this);
        // this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            name: "",
            email: "",
            password: "",
            // submitted: true
        };
    }
    handleInputChange = (event) => {
        // console.log(event.target)
        const { name, value } = event.target;
        // console.log(name, value)
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const { router } = this.props;
        const { navigate } = router;
        event.preventDefault();
        this.setState({ submitted: true });
        const data = this.state
        UserDataService.create(data)
            .then(response => {
                console.log(response.data)
                if ("error" in response.data) {
                    console.log("err")
                    //////////////////
                } else {
                    navigate("/");
                }
            })

    }

    render() {
        const { name, email, password, submitted } = this.state;
        return (
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-yellow-900">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-yellow-100">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-emerald-700   md:text-2xl dark:text-emerald-700  ">
                                Sign Up
                            </h1>
                            <form
                                onSubmit={this.handleSubmit}
                                className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-emerald-700    dark:text-emerald-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="bg-emerald-700 border border-emerald-700 text-yellow-100 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-emerald-700 dark:border-yellow-100 dark:placeholder-yellow-100  "
                                        placeholder="user name"
                                        value={name}
                                        onChange={this.handleInputChange}
                                    />
                                    {/* {errors && errors.name && errors.name.message && <p className="text-red-800">{errors.name.message}</p>} */}

                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-emerald-700    dark:text-emerald-700">Email</label>
                                    <input
                                        name="email"
                                        className="bg-emerald-700 border border-emerald-700 text-yellow-100 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-emerald-700 dark:border-yellow-100 dark:placeholder-yellow-100  "
                                        placeholder="your email"
                                        type="text"
                                        value={email}
                                        onChange={this.handleInputChange}
                                    />
                                    {/* {errors && errors.email && errors.email.message && <p className="text-red-800">{errors.email.message}</p>} */}

                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-emerald-700 dark:text-emerald">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        className="bg-emerald-700 border border- text-yellow-100 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-emerald-700 dark:border-yellow-100 dark:placeholder-yellow-100  "
                                        value={password}
                                        onChange={this.handleInputChange}
                                    />
                                    {/* {errors && errors.password && errors.password.message && <p className="text-red-800">{errors.password.message}</p>} */}

                                </div>
                                <button type="submit" className="w-full text-emerald-700     bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">sign up</button>
                                <p className="text-sm font-light text-yellow-100    dark:text-gray-400">
                                    Do you already have an account? <Link to={"/"} className="font-medium text-emerald-700 hover:underline dark:text-primary-500">login here</Link>
                                </p>
                            </form>
                            {/* {submitted && (
                                <div>
                                    <h2>Form Input Values:</h2>
                                    <p>Name: {name}</p>
                                    <p>Email: {email}</p>
                                    <p>Password: {password}</p>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(SignUp);