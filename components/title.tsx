export default function Title(props) {
    return <h1 style={{
        color: props.cor,
        fontSize: '67px',
        fontWeight: 'bold',
        marginInline: '4px'
    }}>{props.children}</h1>
}