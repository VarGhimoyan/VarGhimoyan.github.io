import React, { Component } from "react";
import UserDataService from "../services/user.service";
import { withRouter } from "../common/with-router";
import { Link } from "react-router-dom";

class LogIn extends Component {
    constructor(props) {
        super(props);
        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.saveTutorial = this.saveTutorial.bind(this);
        // this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            email: "",
            password: "",
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
        console.log(data)
        UserDataService.findOne(data)
            .then(response => {
                console.log(response.data.message)
                if (response.data.message) {
                    // setError(response?.data?.message)
                } else {
                    // console.log(response.data.token)s
                    navigate("/tutorials");
                    // console.log("true")
                }
            })

    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="submit-form">
                <section >
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">

                        {/* {error && <p className="text-red-600">{error}</p>} */}
                        <div
                            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
                            onSubmit={this.handleSubmit}

                        >
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8  dark:bg-yellow-100">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-emerald-700   md:text-2xl ">
                                    log in
                                </h1>
                                <form
                                    className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium  text-emerald-700">Your email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className=" border  text-yellow-100 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-emerald-700 dark:border-yellow-100 dark:placeholder-yellow-100    "
                                            placeholder="email"
                                            value={email}
                                            onChange={this.handleInputChange}
                                        />

                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-emerald-700  dark:text-emerald">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-emerald-700 border border-yellow-100 text-yellow-100 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-emerald-700 dark:border-yellow-100 dark:placeholder-yellow-100  "
                                            value={password}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>

                                    <button className="w-full text-yellow-100    bg-emerald-700  hover:bg-emerald-700  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">log in</button>

                                    <p className="text-sm font-light text-yellow-100    dark:text-gray-400">
                                        Don't have an account? <Link to={"/signup"} className="font-medium text-yellow-100 hover:underline dark:text-emerald-700  ">signup here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(LogIn);