import { Alert, Typography } from "@material-tailwind/react";

export default function ErrorMessage({ messageList }: { messageList: Array<string> }) {
    return messageList.length > 0 && (
        <Alert variant="outlined" color='red'>
            {
                messageList.map((message: string) => {
                    return <Typography variant="small">{message}</Typography>;
                })
            }
        </Alert>
    )
}