function Tweets ({twts}) {
    return (<ul>
        { twts.map(
            t =>
            <li>
            Username: {t.username}
            Name: {t.name}
            Date: {t.date}
            </li>
        )}
    </ul>
    )
}