
const ForbiddenPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center px-6 py-10 bg-white shadow-lg rounded-lg">
                <h1 className="text-6xl font-bold text-red-500">403</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">Access Denied</h2>
                <p className="mt-2 text-gray-600">
                    You don't have permission to access this page.
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
                    >
                        Go Back Home
                    </a>
                </div>
                <div className="mt-8">
                    <img
                        src="https://via.placeholder.com/300x200?text=403+Forbidden"
                        alt="403 Forbidden"
                        className="w-72 mx-auto rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ForbiddenPage;
