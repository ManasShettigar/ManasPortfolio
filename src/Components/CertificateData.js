import WebDesignPDf from "../assests/certificates/WebdesignSpecialization.pdf"
import PythonSpeclicationPDf from "../assests/certificates/PythonSpecialization.pdf"
import GraphicDesignPDf from "../assests/certificates/GraphicDesignCertificate.pdf"
import GoogleAutomationPDf from "../assests/certificates/GoogleITAutoationWithPython.pdf"
import GoogleCloudPDf from "../assests/certificates/GoogleCloud.pdf"
import AWSSpecializationPDf from "../assests/certificates/CourseraAWSSpecialization.pdf"
import AIPDf from "../assests/certificates/ArtificialIntelligenceCertificate.pdf"
import Industy4PDf from "../assests/certificates/Industry4.pdf"

import WebDesignJPG from "../assests/certificates/certificatePreview/WebdesignSpecialization.jpg"
import PythonSpeclicationJPG from "../assests/certificates/certificatePreview/PythonSpecialization.jpg"
import GraphicDesignJPG from "../assests/certificates/certificatePreview/GraphicDesignCertificate.jpg"
import GoogleAutomationJPG from "../assests/certificates/certificatePreview/GoogleITAutoationWithPython.jpg"
import GoogleCloudJPG from "../assests/certificates/certificatePreview/GoogleCloud.jpg"
import AWSSpecializationJPG from "../assests/certificates/certificatePreview/CourseraAWSSpecialization.jpg"
import AIJPG from "../assests/certificates/certificatePreview/ArtificialIntelligenceCertificate.jpg"
import Industy4JPG from "../assests/certificates/certificatePreview/Industry4.jpg"

const certificateData=[
  { name: "Web Design Specialization", file: WebDesignPDf, preview: WebDesignJPG },
  { name: "Python for Everybody Specialization", file: PythonSpeclicationPDf, preview: PythonSpeclicationJPG },
  { name: "Graphic Design Certificate", file: GraphicDesignPDf, preview: GraphicDesignJPG },
  { name: "Google IT Automation with Python", file: GoogleAutomationPDf, preview: GoogleAutomationJPG },
  { name: "Google Cloud Fundamentals", file: GoogleCloudPDf, preview: GoogleCloudJPG },
  { name: "AWS Fundamentals Specialization", file: AWSSpecializationPDf, preview: AWSSpecializationJPG },
  { name: "Artificial Intelligence Certificate", file: AIPDf, preview: AIJPG },
  { name: "Industry 4.0 Certificate", file: Industy4PDf, preview: Industy4JPG },
]

export default certificateData;