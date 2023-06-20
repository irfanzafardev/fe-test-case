import React from "react";

const Modal = ({ stateChanger }) => {
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
							<h3 className="text-3xl font-semibold">Keterangan</h3>
							<button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => stateChanger(false)}>
								<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
							</button>
						</div>
						{/*body*/}
						<div className="relative p-6 flex-auto">
							<p className="my-4 text-slate-500 text-lg leading-relaxed">
								Saya, <strong>Irfan Zafar</strong>, berterima kasih atas kesempatan yang untuk mengikuti test case di posisi ini. <br /> <br />
								Namun karena keterbatasan waktu dan kesehatan yang terganggu, saya tidak mampu untuk menyelesaikan test ini sesuai dengan requirement yang diberikan. <br /> <br />
								Berikut adalah point-point dari test yang saya kerjakan:
								<ul>
									<li>1. Saya menggunakan MapLibre GL JS dan react-map-gl untuk menampilkan Map.</li>
									<li>2. Saya menggunakan ApexChart untuk menampilkan chart sesuai dengan library yang pernah saya gunakan di project sebelumnya dengan tim.</li>
									<li>3. Saya menggunakan TailwindCSS dan native inline CSS untuk styling.</li>
								</ul>
								<br />
								Sekian dari apa yang dapat sampaikan. Terima kasih
							</p>
						</div>
						<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
							<button className="text-slate-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => stateChanger(false)}>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
};

export default Modal;
