import { React, useContext, useEffect, useState } from "react";
import { contextApp } from "../utils/ContextApp";
import DashboardBlock from "../components/DashboardBlock";
import Notice from "../components/Notice";
import Datepicker from "../components/Datepicker";
import InputSeach from "../components/InputSeach";
import ProfileInfo from "../components/ProfileInfo";
import NewAppointment from "./NewAppointment";
import AppointmentInfo from "./AppointmentInfo";

function ContentMain() {
  const { contentView } = useContext(contextApp);
  // const [qtdNotice, setQtdNotice] = useState([]);


  return (
    <main className="px-9 py-6">
      {contentView === "workflow" ? (
        <section className="slideFromRight">
          <div className="py-1">
            <InputSeach />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl my-4 font-Montserrat border-b border-slate-300">
                Dashboard Info
              </h3>
              <div className="flex gap-4 py-2 flex-wrap">
                <DashboardBlock
                  backgroundView="linear-gradient(288deg, #ffffff 29%, #6967de8d 93%)"
                  title="Agendamentos do dia"
                  infoContentMain="50"
                  infoContentSecondary="Agendados"
                  description="Verifique seus agendamentos do dia."
                  iconName="icon4"
                />
                <DashboardBlock
                  backgroundView="linear-gradient(288deg, #ffffff 29%, #67c8de7d 93%)"
                  title="Atendimentos do dia"
                  infoContentMain="175"
                  infoContentSecondary="Atendidos"
                  description="Atendimentos realizados no dia."
                  iconName="icon2"
                />
                <DashboardBlock
                  backgroundView="linear-gradient(288deg, #ffffff 29%, #de67678d 93%)"
                  title="Avisos/Lembretes"
                  infoContentMain="26"
                  infoContentSecondary="Lembretes"
                  description="Lembretes adicionados."
                  iconName="icon3"
                />
                <DashboardBlock
                  backgroundView="linear-gradient(288deg, #ffffff 29%, #8dde679d 93%)"
                  title="Faturamento"
                  labelInfo="R$"
                  infoContentMain="800,00"
                  infoContentSecondary="Faturamento"
                  description="Faturamento dos clientes de hoje."
                  iconName="icon1"
                />
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-1 w-full gap-5">
              <div className="flex gap-6 w-full">
                <div className="w-full">
                  <h3 className="text-xl py-3 font-Montserrat">Avisos</h3>
                  <div className="flex flex-col gap-4 w-full">
                    <Notice
                      titleNotice="Aviso de solicitação"
                      idCheckbox="warningEdit"
                      descriptionNotice="Luciano solicitou consulta para terça-feira, horário 12:20"
           
                    />
                    <Notice
                      priority={`#67c8deb5`}
                      titleNotice="Aviso de confirmação"
                      idCheckbox="warningConfirm"
                      descriptionNotice="Luciana confirmou horário."
                    />
                    <Notice
                      priority={`#de6767b5`}
                      titleNotice="Aviso de cancelamento"
                      idCheckbox="warningCancel"
                      descriptionNotice="Vivian cancelou consulta."
                    />
                    <Notice
                      priority={`#67c8deb5`}
                      titleNotice="Aviso de alteração"
                      idCheckbox="warningAlter"
                      descriptionNotice="Luiz solicitou alteração da consulta para quarta-feira ás 16:30"
                    />
                    <Notice
                      titleNotice="Aviso de solicitação"
                      idCheckbox="warningEdit2"
                      descriptionNotice="Bruno confirmou agendamento de consulta."
                    />
                    <Notice
                      titleNotice="Aviso de solicitação"
                      idCheckbox="warningEdit2"
                      descriptionNotice="Gabriel confirmou agendamento de consulta."
                    />
                 
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-xl py-3 font-Montserrat">Lembretes</h3>
                  <div className="flex flex-col w-full gap-4">
                    <Notice
                      titleNotice="Lembrete de consulta"
                      idCheckbox="reminderQuery"
                      descriptionNotice="Consulta ás 15:00 com Luciana."
                    />
                    <Notice
                      priority={`#67c8deb5`}
                      titleNotice="Lembrete de confirmação"
                      idCheckbox="reminderConfirm"
                      descriptionNotice="Confirmar consulta do Luciano."
                    />
                    <Notice
                      titleNotice="Lembrete de confirmação"
                      idCheckbox="reminderConfirm2"
                      descriptionNotice="Confirmar consulta do Bruno."
                    />
                    <Notice
                      priority={`#67c8deb5`}
                      titleNotice="Lembrete de confirmação"
                      idCheckbox="warningEdit3"
                      descriptionNotice="Marcela solicitou solicitou contato para remarcar a consulta"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full pt-10 ">
                <Datepicker />
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {contentView === "routine" ? (
        <section className="slideFromRight">
          <div className="flex w-full justify-between gap-6">
            <div className="w-full max-w-[550px]">
              <h4 className="pb-4 text-lg font-Montserrat">Médicos</h4>
              <div className="flex flex-col gap-4">
                <ProfileInfo
                  nameProfile="Dra. Renata"
                  company="MedBrasil"
                  specialization="Pediatria"
                  status="Atendendo"
                />
                <ProfileInfo
                  nameProfile="Dr. Robson"
                  company="MedBrasil"
                  specialization="Fisioterapia"
                  status="Disponível"
                />
                <ProfileInfo
                  nameProfile="Dra. Bruna"
                  company="MedBrasil"
                  specialization="Psicologia"
                  status="Ausente"
                />
              </div>
              <div className="flex flex-col w-full pt-5 gap-4 ">
                <NewAppointment
                  appointmentTime="15:00"
                  appointmentDate="07/08/2023"
                />
                <NewAppointment
                  appointmentTime="16:00"
                  appointmentDate="07/08/2023"
                />
                <NewAppointment
                  appointmentTime="17:00"
                  appointmentDate="07/08/2023"
                />
                <NewAppointment
                  appointmentTime="17:30"
                  appointmentDate="07/08/2023"
                />
              </div>
            </div>
            <div className="w-full">
              <h3 className="pb-4 text-lg font-Montserrat">Agendamentos</h3>
              <div className="flex flex-col gap-4">
                <NewAppointment
                  appointmentTime="09:00"
                  appointmentDate="07/08/2023"
                  clientName="João Guilherme Benine"
                  clientID="555.555.555-10"
                  appointmentDescription="Realização de avalição no consultório com Dr. Robson.. Solicitou documentos."
                  appointmentType="Realização de exame radiográfico."
                  setNew={true}
                />
                <NewAppointment
                  appointmentTime="10:00"
                  appointmentDate="07/08/2023"
                  clientName="João Guilherme Benine"
                  clientID="555.555.555-10"
                  appointmentDescription="Realização de avalição no consultório com Dr. Robson.. Solicitou documentos."
                  appointmentType="Realização de exame radiográfico."
                  setNew={true}
                />
                <NewAppointment
                  appointmentTime="12:00"
                  appointmentDate="07/08/2023"
                  clientName="João Guilherme Benine"
                  clientID="555.555.555-10"
                  appointmentDescription="Realização de avalição no consultório com Dr. Robson.. Solicitou documentos."
                  appointmentType="Realização de exame radiográfico."
                  setNew={true}
                />
                <NewAppointment
                  appointmentTime="13:00"
                  appointmentDate="07/08/2023"
                  clientName="João Guilherme Benine"
                  clientID="555.555.555-10"
                  appointmentDescription="Realização de avalição no consultório com Dr. Robson.. Solicitou documentos."
                  appointmentType="Realização de exame radiográfico."
                  setNew={true}
                />
                <NewAppointment
                  appointmentTime="14:00"
                  appointmentDate="07/08/2023"
                  clientName="João Guilherme Benine"
                  clientID="555.555.555-10"
                  appointmentDescription="Realização de avalição no consultório com Dr. Robson.. Solicitou documentos."
                  appointmentType="Realização de exame radiográfico."
                  setNew={true}
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {contentView === "patients" ? (
        <section className="slideFromRight">
          <div className="py-1">
            <InputSeach />
          </div>
          <h3 className="text-2xl my-4 flex justify-between items-center font-Montserrat border-b border-slate-300 ">
            Consultas Agendadas
          </h3>

          <div className="flex gap-5 flex-wrap">
            <AppointmentInfo
              serviceInfo="Avaliação"
              clientName="Vitor Luiz Almeida"
              clientID="099.999.999-01"
              doctorName="Dra. Renata"
              doctorID="1111"
              doctorSpecialization="Fisioterapeuta"
              initialValues={{
                infoDate: "10/02/2023",
                infoTime: "17:30",
                infoPrice: "150,00",
              }}
            />
            <AppointmentInfo
              serviceInfo="Avaliação"
              clientName="José"
              clientID="099.555.741-01"
              doctorName="Dr. Luiz"
              doctorID="2222"
              doctorSpecialization="Clínico"
              initialValues={{
                infoDate: "10/10/2023",
                infoTime: "15:04",
                infoPrice: "50,00",
              }}
            />
            <AppointmentInfo
              serviceInfo="Avaliação"
              clientName="Junior"
              clientID="099.444.245-01"
              doctorName="Dr. Paulo"
              doctorID="4444"
              doctorSpecialization="Fisioterapeuta"
              initialValues={{
                infoDate: "05/06/2023",
                infoTime: "15:10",
                infoPrice: "70,00",
              }}
            />
            <AppointmentInfo
              serviceInfo="Avaliação"
              clientName="Gabriel"
              clientID="099.999.741-01"
              doctorName="Dr. Renato"
              doctorID="3333"
              doctorSpecialization="Ortopedista"
              initialValues={{
                infoDate: "13/11/2023",
                infoTime: "16:00",
                infoPrice: "85,00",
              }}
            />
            <AppointmentInfo
              serviceInfo="Exame"
              clientName="Jorge"
              clientID="099.442.741-01"
              doctorName="Dr. José"
              doctorID="5555"
              doctorSpecialization="Ortopedista"
              initialValues={{
                infoDate: "19/07/2023",
                infoTime: "10:40",
                infoPrice: "65,00",
              }}
            />
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default ContentMain;
