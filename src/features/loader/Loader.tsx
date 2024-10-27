import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

type LoaderProps = {
    size?: number;
};

export const Loader: FC<LoaderProps> = ({ size = 60 }) => (
    <ThreeDots color="#f9b17a" height={size} width={size} ariaLabel="loading" />
);
