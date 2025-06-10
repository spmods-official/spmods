import SectionHeader from "../components/SectionHeader";
import { ButtonGroup, ButtonGroupItem } from "../components/ButtonGroup";
import ResponsiveGrid from "../components/ResponsiveGrid";

export default function AboutContainer() {
    return (
        <div className="container max-w-5xl lg:px-10 text-gray-900 dark:text-white">
            <SectionHeader>🎓 About SPMods</SectionHeader>
            <p>
                Welcome to SPMods, a dedicated platform built by a group of alumni for
                Singapore Polytechnic students! We understand the challenges you face
                when navigating your modules, and we&#39;re here to make your academic
                journey smoother and more connected.
            </p>

            <SectionHeader>🎯 Our Purpose</SectionHeader>
            <p>
                Have you ever wished there was a central place to get advice on modules
                from seniors, prepare for upcoming semesters, or simply discuss
                module-related questions with your peers? We did too! That&#39;s why we
                created SPMods to address these common challenges:
            </p>
            <ul className="list-disc pl-4 space-y-2 my-3">
                <li>
                    <span className="font-bold">
                        No dedicated space for senior advice:
                    </span>{" "}
                    Students who have already completed a module often lack a dedicated
                    channel to share valuable tips and insights with juniors. SPMods
                    provides that space.
                </li>
                <li>
                    <span className="font-bold">No central module preparation hub:</span>{" "}
                    It can be tough to explore and prepare for upcoming modules,
                    especially during semester breaks, without a unified platform. SPMods
                    aims to be your go-to resource.
                </li>
                <li>
                    <span className="font-bold">Scattered student discussions:</span>{" "}
                    Module-related conversations are often fragmented across various
                    social media platforms and informal groups. We&#39;re bringing them
                    all together in one place.
                </li>
            </ul>

            <SectionHeader>✨ What SPMods Offers</SectionHeader>
            <p>
                SPMods is designed to be your comprehensive module companion. Here&#39;s
                what you can do:
            </p>
            <ul className="list-disc pl-4 space-y-2 my-3">
                <li>
                    <span className="font-bold">💡 Get tips and reviews:</span> See
                    valuable advice and reviews from students who have already taken the
                    modules you&#39;re interested in.
                </li>
                <li>
                    <span className="font-bold">📚 Crowdsource resources:</span> Discover
                    and contribute useful resources and links that other students have
                    found helpful for specific modules.
                </li>
                <li>
                    <span className="font-bold">💭 Discuss and ask questions:</span>{" "}
                    Engage in discussions and get your questions answered about module
                    topics and assignments.
                </li>
                <li>
                    <span className="font-bold">📋 Browse module metadata:</span> Easily
                    find information like topics covered and workload for various modules.
                </li>
            </ul>

            <SectionHeader>🤝 Built for Students, By Students</SectionHeader>
            <p>
                SPMods is an open-source project, meaning its code is openly available
                for students to contribute to and learn from. We believe in fostering a
                collaborative environment where you can not only benefit from the
                platform but also participate in its development.
            </p>

            <SectionHeader>🌟 Get Involved!</SectionHeader>
            <p>
                We&#39;re always looking for enthusiastic students to join our community
                and help improve SPMods.
            </p>

            <ResponsiveGrid base={"one"} md={"two"}>
                <div className="flex-1 rounded-lg p-5 border dark:border-gray-600 my-5 flex flex-col">
                    <header className="text-1xl font-bold">
                        👩‍💻 Become a Contributor
                    </header>
                    <p className="my-3">
                        Want to hone your coding skills, collaborate on a real-world
                        project, and make a tangible impact on your fellow students&#39;
                        academic lives? Join our open-source initiative!
                    </p>
                    <div className="flex justify-center mt-auto">
                        <ButtonGroup>
                            <ButtonGroupItem href="https://docs.google.com/forms/d/e/1FAIpQLSctx7EgGZlMRD9Uu3tkZxDbhZNJUKSD6xSYs6mlf6D2ubqJCw/viewform">
                                Contributor Sign-Up
                            </ButtonGroupItem>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="flex-1 rounded-lg p-5 border dark:border-gray-600 my-5 flex flex-col">
                    <header className="text-1xl font-bold">📝 Share Your Feedback</header>
                    <p className="my-3">
                        Your insights are invaluable in helping us make SPMods the best it
                        can be. Please take a moment to share your thoughts and validate our
                        ideas.
                    </p>
                    <div className="flex justify-center mt-auto">
                        <ButtonGroup>
                            <ButtonGroupItem href="https://docs.google.com/forms/d/e/1FAIpQLSdIf8x_Yer6ZbihCJnK_8_Wn7Pb-6N41oPkyHFCJVjPGpA3rw/viewform">
                                Validation Survey
                            </ButtonGroupItem>
                        </ButtonGroup>
                    </div>
                </div>
            </ResponsiveGrid>
        </div>
    );
}
