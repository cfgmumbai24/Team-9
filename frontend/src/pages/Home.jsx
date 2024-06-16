import { Button } from "flowbite-react";

const HomePage = () => {
  return (
    <div className="min-h-[400vh] bg-gray-100 flex flex-col items-center">
      <header className="bg-white shadow w-full sticky top-0 z-50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Our Educational Platform
          </h1>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section className="h-[100vh] flex flex-col items-center justify-center text-center bg-gray-200">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Problem Statement & Proposed Solution
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Manual systems fail to effectively manage the expanding student and
            mentor base. Our platform provides a comprehensive solution
            featuring secure login, data management, and real-time interaction
            capabilities.
          </p>
          <Button size="lg">Learn More</Button>
        </section>
        <section className="h-[100vh] flex flex-col items-center justify-center text-center bg-gray-300">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Backend Technical Components
          </h2>
          <ul className="text-xl text-gray-600 mb-8 list-disc list-inside">
            <li>Server Setup: Node.js and Express framework</li>
            <li>
              Database Management: MongoDB for efficient data storage and
              retrieval
            </li>
            <li>
              API Integration: RESTful API design for seamless data exchange
            </li>
          </ul>
          <Button size="lg">Explore More</Button>
        </section>
        <section className="h-[100vh] flex flex-col items-center justify-center text-center bg-gray-400">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frontend Technical Components
          </h2>
          <ul className="text-xl text-gray-600 mb-8 list-disc list-inside">
            <li>User Interface: React-based front-end structure</li>
            <li>State Management: Redux for consistent and efficient UI</li>
            <li>
              Security Measures: JWT for secure authentication and authorization
            </li>
          </ul>
          <Button size="lg">Discover More</Button>
        </section>
        <section className="h-[100vh] flex flex-col items-center justify-center text-center bg-gray-500">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovations/USP
          </h2>
          <ul className="text-xl text-gray-400 mb-8 list-disc list-inside">
            <li>Personalized Learning Paths: Career mapping and mentorship</li>
            <li>
              Real-Time Communication: Chat feature for effective mentor-student
              interaction
            </li>
            <li>
              Analytics Dashboard: Insights into student performance and
              activity
            </li>
          </ul>
          <Button size="lg">Explore Innovations</Button>
        </section>
        <section className="h-[100vh] flex flex-col items-center justify-center text-center bg-gray-600">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Future Scope
          </h2>
          <ul className="text-xl text-white mb-8 list-disc list-inside">
            <li>OTP-Based Login and Multilingual Support</li>
            <li>Assisted Technology Initiative for remote students</li>
            <li>Cloud Scalability for handling increased user loads</li>
          </ul>
          <Button size="lg">Future Plans</Button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
