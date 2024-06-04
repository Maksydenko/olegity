import { useEffect } from "react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Concerts from "@/components/screens/Concerts/Concerts";

import useConcertsStore from "@/stores/useConcerts.store";

import { ConcertsService } from "@/services/concerts.service";

import { IConcert } from "@/interfaces/concert.interface";
import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

interface ConcertsPageProps {
  concerts: IConcert[];
}

const ConcertsPage: NextPage<ConcertsPageProps> = ({ concerts }) => {
  const { setConcerts } = useConcertsStore();

  useEffect(
    () => {
      setConcerts(concerts);
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  );

  return <Concerts />;
};

export default ConcertsPage;

interface IConcertsGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IConcertsGetStaticProps) => {
  const concerts = await ConcertsService.getConcerts();

  return {
    props: {
      concerts,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
