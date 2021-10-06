import access from '../images/icon-access-anywhere.svg';
import security from '../images/icon-security.svg';
import file from '../images/icon-any-file.svg';
import collaboration from '../images/icon-collaboration.svg';

const contents = [
  {
    title: 'Access your files, anywhere',
    content:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    image: access,
  },
  {
    title: 'Security you can trust',
    content:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    image: security,
  },
  {
    title: 'Real-time collaboration',
    content:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    image: collaboration,
  },
  {
    title: 'Store any type of file',
    content: `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.`,
    image: file,
  },
];

export default contents;
