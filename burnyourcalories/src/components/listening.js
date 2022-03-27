
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useMutation, gql } from '@apollo/client';

const INIT_REPORT = gql`
  mutation($userId: String!) {
    initReport(userId: $userId) {
      ... on ReportFail {
        message,
        statusCode
      }
      ... on ReportId {
        reportId,
        statusCode
      }
    }
  }
`;

let isReportInit = false;

const Listening = ({loadModel, loadWebcam, startSession, stopSession, createReport}) => {
    let report, reportId, userId = "623d4a099d89d0950438a820";

    const [initReport] = useMutation(INIT_REPORT, {
        onCompleted: (data) => {
            return data
        },
        onError: () => {
            return null;
        }
    });

    const commands = [
        {
            command: 'Start',
            callback: async () => {
                if(isReportInit == false) {
                    isReportInit = true;
                    createReport();
                    await loadModel();
                    loadWebcam();
                    await startSession();
                }
            },
            matchInterim: true
        },
        {
            command: 'Stop',
            callback: async () => {
                await stopSession();
            },
            matchInterim: true
        }
    ]
    const {browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
    if (!browserSupportsSpeechRecognition) {
        return null
    }
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-US" });

    startListening();

    return (
        <>
        </>
    )
}

export default Listening;