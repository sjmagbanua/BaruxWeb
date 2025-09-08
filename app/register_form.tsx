export default function RegisterForm() {
    return (
        <>
            <div className="h-screen p-8">
                Register Form
                <div className="h-full rounded-md border border-red-400 flex flex-col">
                    <form action="">
                        <label htmlFor="">Fullname</label>
                        <input type="text" />
                        <br />
                        <label htmlFor="">Email</label>
                        <input type="text" />
                        <br />
                        <label htmlFor="">Password</label>
                        <input type="text" />
                        <br />
                        <label htmlFor="">CofnirmPassword</label>
                        <input type="text" />
                    </form>
                </div>
            </div>
        </>
    );
}