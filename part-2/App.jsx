function App() {
    return (
        <div style={{color: "pink",
            backgroundColor: "blue"}}>
            <Tweets twts={
                [{
                    username: "Raven",
                    name: "Cat",
                    date: "Feb 14th"
                },
                {
                    username: "u2",
                    name: "uu2",
                    date: "Feb 15th"
                },
                {
                    username: "u3",
                    name: "uu3",
                    date: "Feb 16th"
                }]
            } />

        </div>
    );
}