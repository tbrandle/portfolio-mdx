import {
	ReactOriginalWordmark,
	JavaOriginalWordmark,
	SpringOriginalWordmark,
	ApachekafkaOriginalWordmark,
	DockerOriginalWordmark,
	KubernetesOriginalWordmark,
	RubyOriginalWordmark,
	RailsPlainWordmark,
	NextjsOriginalWordmark,
	AmazonwebservicesOriginalWordmark,
	GooglecloudOriginalWordmark,
	ReduxOriginal,
	GraphqlPlainWordmark,
	TypescriptOriginal,
	NodejsOriginalWordmark,
	PrismaOriginalWordmark,
	PostgresqlOriginalWordmark,
	ExpressOriginalWordmark,
	BootstrapOriginalWordmark,
	D3jsOriginal,
} from "devicons-react";

interface LanguageIconProps {
	language: string;
}

const LanguageIcon = ({ language }: LanguageIconProps) => {
	switch (language) {
		case "React":
			return <ReactOriginalWordmark size={"70"} />;

		case "Java":
			return <JavaOriginalWordmark size={"60"} />;

		case "Spring":
			return <SpringOriginalWordmark size={"70"} />;

		case "Kafka":
			return <ApachekafkaOriginalWordmark size={"75"} />;

		case "Docker":
			return <DockerOriginalWordmark size={"60"} />;

		case "Kubernetes":
			return <KubernetesOriginalWordmark size={"65"} />;

		case "Ruby":
			return <RubyOriginalWordmark size={"65"} />;

		case "Rails":
			return <RailsPlainWordmark size={"65"} />;

		case "Nextjs":
			return <NextjsOriginalWordmark size={"65"} />;

		case "AWS":
			return <AmazonwebservicesOriginalWordmark size={"65"} />;

		case "GCP":
			return <GooglecloudOriginalWordmark size={"100"} />;

		case "Redux":
			return <ReduxOriginal size={"60"} />;

		case "GraphQL":
			return <GraphqlPlainWordmark size={"60"} />;

		case "Typescript":
			return <TypescriptOriginal size={"60"} />;

		case "Nodejs":
			return <NodejsOriginalWordmark size={"70"} />;

		case "Prisma":
			return <PrismaOriginalWordmark size={"70"} />;

		case "PostgresQL":
			return <PostgresqlOriginalWordmark size={"60"} />;

		case "Express":
			return <ExpressOriginalWordmark size={"70"} />;

		case "Bootstrap":
			return <BootstrapOriginalWordmark size={"60"} />;

		case "D3":
			return <D3jsOriginal size={"60"} />;      

		default:
			break;
	}
};

export default LanguageIcon;
