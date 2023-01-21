--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: typeStatus; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."typeStatus" AS ENUM (
    'ongoing',
    'finished'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: series; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.series (
    id integer NOT NULL,
    name text NOT NULL,
    platform text NOT NULL,
    genre text NOT NULL,
    review text,
    status public."typeStatus",
    rate integer
);


--
-- Name: series_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.series_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: series_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.series_id_seq OWNED BY public.series.id;


--
-- Name: series id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.series ALTER COLUMN id SET DEFAULT nextval('public.series_id_seq'::regclass);


--
-- Data for Name: series; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.series VALUES (1, 'Dark', 'Netflix', 'Mystery thriller', 'One of the best series I''ve ever seen!', 'finished', 5);
INSERT INTO public.series VALUES (2, '1899', 'Netflix', 'Drama', 'Not bad!', 'finished', 4);
INSERT INTO public.series VALUES (5, 'The Mandalorian', 'Disney+', 'Drama', NULL, NULL, NULL);
INSERT INTO public.series VALUES (6, 'The Boys', 'Prime Video', 'Drama', NULL, NULL, NULL);
INSERT INTO public.series VALUES (10, 'Succession', 'HBO Max', 'Drama', NULL, NULL, NULL);
INSERT INTO public.series VALUES (11, 'Euphoria', 'HBO Max', 'Drama', NULL, NULL, NULL);
INSERT INTO public.series VALUES (12, 'Criminal Minds', 'Paramount+', 'Crime', NULL, NULL, NULL);
INSERT INTO public.series VALUES (13, 'Star Trek: Strange New Worlds', 'Paramount+', 'Sci fi', NULL, NULL, NULL);
INSERT INTO public.series VALUES (14, 'The Wheel of Time', 'Prime Video', 'Fantasy', NULL, NULL, NULL);
INSERT INTO public.series VALUES (15, 'The Lord of the Rings: The Rings of Power', 'Prime Video', 'Fantasy', NULL, NULL, NULL);
INSERT INTO public.series VALUES (16, 'Willow', 'Disney+', 'Fantasy', NULL, NULL, NULL);
INSERT INTO public.series VALUES (17, 'Moon Knight', 'Disney+', 'Mystery thriller', NULL, NULL, NULL);
INSERT INTO public.series VALUES (18, 'The Umbrella Academy', 'Netflix', 'Action', 'marromeno', 'ongoing', 3);
INSERT INTO public.series VALUES (4, 'Loki', 'Disney+', 'Drama', 'nice', 'ongoing', 4);
INSERT INTO public.series VALUES (7, 'Wednesday', 'Netflix', 'Mystery thriller', 'no big deal', 'ongoing', 2);
INSERT INTO public.series VALUES (9, 'The Office', 'Netflix', 'Comedy', 'for comedy: 10; for boring couple drama: 0', 'ongoing', 5);
INSERT INTO public.series VALUES (8, 'Squid Game', 'Netflix', 'Drama', 'nothing special', 'finished', 3);
INSERT INTO public.series VALUES (19, 'House fo the Dragon', 'HBO Max', 'Drama', NULL, NULL, NULL);


--
-- Name: series_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.series_id_seq', 19, true);


--
-- Name: series series_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.series
    ADD CONSTRAINT series_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

