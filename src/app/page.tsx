import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

export default function Home() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <Card className="py-2">
                <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                    <p className="text-tiny font-bold uppercase">Daily Mix</p>
                    <small className="text-default-500">21 Tracks</small>
                    <h4 className="text-large font-bold">
                        Frontend Radio with Woongsik
                    </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="rounded-xl object-cover"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        width={270}
                    />
                </CardBody>
            </Card>
        </div>
    );
}
