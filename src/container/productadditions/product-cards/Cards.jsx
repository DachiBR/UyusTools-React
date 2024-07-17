import React, { useState } from 'react';
import './cards.css';
import Article from '../article/Article';
import { 
  product00, product01, product02, product03, product04, 
  product05, product06, product07, product08, product09,
  product10, product11, product12, product13, product14, 
  product15, product16, product17, product18, product19,
  product20, product21, product22, product23, product24, 
  product25, product26, product27, product28, product29,
  product30, product31, product32, product33, product34, 
  product35, product36, product37, product38, product39,
  product40, product41, product42, product43, product44, 
  product45, product46, product47, product48, product49,
  product50, product51, product52, product53, product54, 
  product55, product56, product57, product58, product59,
  product60, product61, product62, product63, product64, 
  product65, product66, product67, product68, product69,
  product70, product71, product72, product73, product74, 
  product75, product76, product77, product78, product79,
  product80, product81, product82, product83, product84, 
  product85, product86, product87, product88, product89,
  product90, product91, product92, product93, product94, 
  product95, product96, product97, product98, product99,
  product100, product101, product102, product103, product104, 
  product105, product106, product107, product108, product109,
  product110, product111, product112, product113, product114, 
  product115, product116, product117, product118, product119,
  product120, product121, product122, product123, product124, 
  product125, product126, product127, product128, product129,
  product130, product131, product132, product133, product134, 
  product135, product136, product137, product138, product139,
  product140, product141, product142, product143, product144, 
  product145, product146, product147, product148, product149,
  product150, product151, product152, product153, product154, 
  product155, product156, product157, product158, product159,
  product160, product161, product162, product163, product164, 
  product165, product166, product167, product168, product169,
  product170, product171, product172, product173, product174, 
  product175, product176, product177, product178, product179,
  product180, product181, product182, product183, product184, 
  product185, product186, product187, product188, product189,
  product190, product191, product192, product193, product194, 
  product195, product196, product197, product198, product199,
  product200, product201, product202, product203
} from './import';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 16; // Maximum number of articles per page

  const articles = [
    { imgUrl: product00, date: "ACC206", text: "CABLE CUTTER", category: "Category 1", agwera: "agwera 00" },
    { imgUrl: product01, date: "AL8006", text: "MULTI-PURPOSE CRIMPING PLIERS", category: "Category 1", agwera: "agwera 1" },
    { imgUrl: product02, date: "ALC615", text: "DIAGONAL CUTTING PLIERS", category: "Category 2", agwera: "agwera 2" },
    { imgUrl: product03, date: "ALC715", text: "DIAGONAL CUTTING PLIERS", category: "Category 3", agwera: "agwera 3" },
    { imgUrl: product04, date: "ALF06U", text: "SLIP JOINT PLIERS", category: "Category 1", agwera: "agwera 4" },
    { imgUrl: product05, date: "ALL208", text: "WATER PUMP PLIERS", category: "Category 2", agwera: "agwera 5" },
    { imgUrl: product06, date: "ALL210", text: "WATER PUMP PLIERS", category: "Category 3", agwera: "agwera 6" },
    { imgUrl: product07, date: "ALL212", text: "WATER PUMP PLIERS", category: "Category 1", agwera: "agwera 7" },
    { imgUrl: product08, date: "ALM10C", text: "CHAIN LOCKING PLIERS", category: "Category 2", agwera: "agwera 8" },
    { imgUrl: product09, date: "ALM10U", text: "CURVED JAW LOCKING PLIERS", category: "Category 3", agwera: "agwera 9" },
    { imgUrl: product10, date: "ALP111", text: "LONG NEEDLE ROUND NOSE PLIERS", category: "Category 1", agwera: "agwera 10" },
    { imgUrl: product11, date: "ALP615", text: "LONG NOSE PLIERS", category: "Category 2", agwera: "agwera 11" },
    { imgUrl: product12, date: "ALR011", text: "SHAPE NEEDLE NOSE PLIERS", category: "Category 3", agwera: "agwera 12" },
    { imgUrl: product13, date: "ALS910", text: "WELDING LOCKING PLIERS", category: "Category 1", agwera: "agwera 13" },
    { imgUrl: product14, date: "ALU615", text: "COMBINATION PLIERS", category: "Category 2", agwera: "agwera 14" },
    { imgUrl: product15, date: "ALU715", text: "-", category: "Category 3", agwera: "agwera 15" },
    { imgUrl: product16, date: "ALU815", text: "COMBINATION PLIERS", category: "Category 1", agwera: "agwera 16" },
    { imgUrl: product17, date: "AMO412", text: "CHAINSAW ATTACHMENT FOR ANGLE GRINDER", category: "Category 2", agwera: "agwera 17" },
    { imgUrl: product18, date: "AMR004", text: "NYLON CABLE TIES", category: "Category 3", agwera: "agwera 18" },
    { imgUrl: product19, date: "AMR006", text: "NYLON CABLE TIES", category: "Category 1", agwera: "agwera 19" },
    { imgUrl: product20, date: "AMR007", text: "NYLON CABLE TIES", category: "Category 2", agwera: "agwera 20" },
    { imgUrl: product21, date: "AMR103", text: "NYLON CABLE TIES", category: "Category 3", agwera: "agwera 21" },
    { imgUrl: product22, date: "AMR104", text: "NYLON CABLE TIES", category: "Category 1", agwera: "agwera 22" },
    { imgUrl: product23, date: "APTT514", text: "5PCS MAGNETIC SOCKET CONNECTOR SET", category: "Category 2", agwera: "agwera 23" },
    { imgUrl: product24, date: "BAT550", text: "MIXER ROD", category: "Category 3", agwera: "agwera 24" },
    { imgUrl: product25, date: "BCE3SU", text: "3PCS HSS STEP DRILL BIT SET", category: "Category 1", agwera: "agwera 25" },
    { imgUrl: product26, date: "BCF19S", text: "19PCS HSS TWIST DRILL BIT SET", category: "Category 2", agwera: "agwera 26" },
    { imgUrl: product27, date: "BCF29S-M", text: "29PCS HSS TWIST DRILL BIT SET", category: "Category 3", agwera: "agwera 27" },
    { imgUrl: product28, date: "BCT1422", text: "4PCS SDS PLUS CHISEL SET", category: "Category 1", agwera: "agwera 28" },
    { imgUrl: product29, date: "BCT1423", text: "SDS PLUS FLAT CHISEL", category: "Category 2", agwera: "agwera 29" },
    { imgUrl: product30, date: "BCT1424", text: "SDS PLUS POINTED CHISEL", category: "Category 3", agwera: "agwera 30" },
    { imgUrl: product31, date: "BCT1433", text: "SDS PLUS FLAT CHISEL", category: "Category 1", agwera: "agwera 31" },
    { imgUrl: product32, date: "BCT3040", text: "SDS PLUS POINTED CHISEL", category: "Category 2", agwera: "agwera 32" },
    { imgUrl: product33, date: "BCT3043", text: "PH65 POINTED CHISEL", category: "Category 3", agwera: "agwera 33" },
    { imgUrl: product34, date: "BCT401", text: "PH65 FLAT CHISEL", category: "Category 1", agwera: "agwera 34" },
    { imgUrl: product35, date: "BCX16S", text: "16PCS MIXED DRILL BIT SET", category: "Category 2", agwera: "agwera 35" },
    { imgUrl: product36, date: "BOA02U", text: "FLOOR PUMP", category: "Category 3", agwera: "agwera 36" },
    { imgUrl: product37, date: "BOM2826", text: "MINI HAND PUMP", category: "Category 1", agwera: "agwera 37" },
    { imgUrl: product38, date: "CBA100U", text: "BOOSTER CABLE", category: "Category 2", agwera: "agwera 38" },
    { imgUrl: product39, date: "CBA20U", text: "BOOSTER CABLE", category: "Category 3", agwera: "agwera 39" },
    { imgUrl: product40, date: "CBA40U", text: "BOOSTER CABLE", category: "Category 1", agwera: "agwera 40" },
    { imgUrl: product41, date: "CCA1000", text: "MANUAL TILE CUTTER", category: "Category 2", agwera: "agwera 41" },
    { imgUrl: product42, date: "CCA800", text: "PROFESSIONAL MANUAL TILE CUTTERBOTTLES", category: "Category 2", agwera: "agwera 42" },
    { imgUrl: product43, date: "CCM122D", text: "CUTTING WHEEL OF PENCIL TILE CUTTER", category: "Category 1", agwera: "agwera 43" },
    { imgUrl: product44, date: "CIA310", text: "PVC INSULATING TAPE", category: "Category 3", agwera: "agwera 44" },
    { imgUrl: product45, date: "CIA320", text: "PVC INSULATING TAPE", category: "Category 2", agwera: "agwera 45" },
    { imgUrl: product46, date: "CMM300U", text: "MINI AUTO AIR COMPRESSOR", category: "Category 1", agwera: "agwera 46" },
    { imgUrl: product47, date: "CMP50U", text: "AIR COMPRESSOR", category: "Category 3", agwera: "agwera 47" },
    { imgUrl: product48, date: "COF004", text: "SLEDGE HAMMER (FIBERGLASS HANDLE)", category: "Category 1", agwera: "agwera 48" },
    { imgUrl: product49, date: "COF008", text: "SLEDGE HAMMER (FIBERGLASS HANDLE)", category: "Category 2", agwera: "agwera 49" },
    { imgUrl: product50, date: "CPT003", text: "3PCS DRILL BRUSH SET", category: "Category 3", agwera: "agwera 50" },
    { imgUrl: product51, date: "CQA19U", text: "UTILITY KNIFE BLADE", category: "Category 1", agwera: "agwera 51" },
    { imgUrl: product52, date: "CU259C", text: "RATCHET STRAPS", category: "Category 2", agwera: "agwera 52" },
    { imgUrl: product53, date: "CU399C", text: "RATCHET STRAPS", category: "Category 3", agwera: "agwera 53" },
    { imgUrl: product54, date: "CVU820", text: "GLASS CUTTER", category: "Category 1", agwera: "agwera 54" },
    { imgUrl: product55, date: "CXG1206", text: "STAPLES", category: "Category 2", agwera: "agwera 55" },
    { imgUrl: product56, date: "CXG1214", text: "STAPLES", category: "Category 3", agwera: "agwera 56" },
    { imgUrl: product57, date: "DAA1210L", text: "10PCS 1/2' DEEP IMPACT SOCKET SET (LONG)", category: "Category 1", agwera: "agwera 57" },
    { imgUrl: product58, date: "DAD021", text: "21PCS SOCKET SET", category: "Category 2", agwera: "agwera 58" },
    { imgUrl: product59, date: "DAD108U", text: "108PCS 1/4 AND 1/2 SOCKET SET", category: "Category 3", agwera: "agwera 59" },
    { imgUrl: product60, date: "DAD46U", text: "46PCS 1/4 SOCKET SET", category: "Category 1", agwera: "agwera 60" },
    { imgUrl: product61, date: "DAD94U-CL", text: "94PCS 1/4 AND 1/2 SOCKET SET", category: "Category 2", agwera: "agwera 61" },
    { imgUrl: product62, date: "DAD94U", text: "94PCS 1/4 AND 1/2 SOCKET SET", category: "Category 3", agwera: "agwera 62" },
    { imgUrl: product63, date: "DCM504", text: "ABRASIVE METAL CUTTING DISC", category: "Category 1", agwera: "agwera 63" },
    { imgUrl: product64, date: "DCM505", text: "ABRASIVE METAL CUTTING DISC", category: "Category 2", agwera: "agwera 64" },
    { imgUrl: product65, date: "DCM509", text: "ABRASIVE METAL CUTTING DISC", category: "Category 3", agwera: "agwera 65" },
    { imgUrl: product66, date: "DCM514", text: "ABRASIVE METAL CUTTING DISC", category: "Category 1", agwera: "agwera 66" },
    { imgUrl: product67, date: "DCP410P", text: "BRUSH CUTTER BLADE", category: "Category 2", agwera: "agwera 67" },
    { imgUrl: product68, date: "DDU230", text: "DRY DIAMOND CUTTING DISC", category: "Category 3", agwera: "agwera 68" },
    { imgUrl: product69, date: "DEG204", text: "PHILLIPS GO-THROUGH SCREWDRIVER", category: "Category 1", agwera: "agwera 69" },
    { imgUrl: product70, date: "DEG6AU", text: "6PCS GO-THROUGH SCREWDRIVER SET", category: "Category 2", agwera: "agwera 70" },
    { imgUrl: product71, date: "DEI002", text: "13PCS IMPACT SCREWDRIVER SET", category: "Category 3", agwera: "agwera 71" },
    { imgUrl: product72, date: "DEM02T", text: "2 IN 1 SCREWDRIVER", category: "Category 1", agwera: "agwera 72" },
    { imgUrl: product73, date: "DEM058", text: "58PCS MULTIPURPOSE SCREWDRIVER SET", category: "Category 2", agwera: "agwera 73" },
    { imgUrl: product74, date: "DEM102", text: "PHILLIPS SCREWDRIVER", category: "Category 3", agwera: "agwera 74" },
    { imgUrl: product75, date: "DEM105", text: "SLOTTED SCREWDRIVER", category: "Category 1", agwera: "agwera 75" },
    { imgUrl: product76, date: "DEP605", text: "6PCS TORX SCREWDRIVER SET", category: "Category 2", agwera: "agwera 76" },
    { imgUrl: product77, date: "DER46J", text: "46PCS RATCHET SCREWDRIVER SET", category: "Category 3", agwera: "agwera 77" },
    { imgUrl: product78, date: "DET21U", text: "21PCS T-HANDLE SCREWDRIVER SET", category: "Category 1", agwera: "agwera 78" },
    { imgUrl: product79, date: "DLF5120M", text: "FLAP GRINDING DISC", category: "Category 2", agwera: "agwera 79" },
    { imgUrl: product80, date: "DLF540M", text: "FLAP GRINDING DISC", category: "Category 3", agwera: "agwera 80" },
    { imgUrl: product81, date: "DLF540T", text: "FLAP GRINDING DISC", category: "Category 1", agwera: "agwera 81" },
    { imgUrl: product82, date: "DLF560M", text: "FLAP GRINDING DISC", category: "Category 2", agwera: "agwera 82" },
    { imgUrl: product83, date: "DLF560T", text: "FLAP GRINDING DISC", category: "Category 3", agwera: "agwera 83" },
    { imgUrl: product84, date: "DLF580M", text: "FLAP GRINDING DISC", category: "Category 1", agwera: "agwera 84" },
    { imgUrl: product85, date: "DLF580T", text: "FLAP GRINDING DISC", category: "Category 2", agwera: "agwera 85" },
    { imgUrl: product86, date: "DTM413", text: "WOOD CARVING DISC", category: "Category 3", agwera: "agwera 86" },
    { imgUrl: product87, date: "EBC001", text: "HAND SCRATCH BRUSH", category: "Category 1", agwera: "agwera 87" },
    { imgUrl: product88, date: "EBC003", text: "WIRE CUP BRUSH", category: "Category 2", agwera: "agwera 88" },
    { imgUrl: product89, date: "EBC103", text: "WIRE CUP BRUSH", category: "Category 3", agwera: "agwera 89" },
    { imgUrl: product90, date: "EBP06U", text: "STEEL WIRE BRUSH", category: "Category 1", agwera: "agwera 90" },
    { imgUrl: product91, date: "EGU002", text: "3 IN 1 STAPLE GUN", category: "Category 2", agwera: "agwera 91" },
    { imgUrl: product92, date: "ELA101", text: "ELASTIC ROPE", category: "Category 3", agwera: "agwera 92" },
    { imgUrl: product93, date: "ENG402", text: "GREASE GUN", category: "Category 1", agwera: "agwera 93" },
    { imgUrl: product94, date: "EPG008", text: "DRYWALL TAPING KNIVES", category: "Category 2", agwera: "agwera 94" },
    { imgUrl: product95, date: "EPG010", text: "DRYWALL TAPING KNIVES", category: "Category 3", agwera: "agwera 95" },
    { imgUrl: product96, date: "EPG012", text: "DRYWALL TAPING KNIVES", category: "Category 1", agwera: "agwera 96" },
    { imgUrl: product97, date: "EPU01M", text: "PUTTY KNIFE", category: "Category 2", agwera: "agwera 97" },
    { imgUrl: product98, date: "EPU03M", text: "PUTTY KNIFE", category: "Category 3", agwera: "agwera 98" },
    { imgUrl: product99, date: "EPU25M", text: "PUTTY KNIFE", category: "Category 1", agwera: "agwera 99" },
    { imgUrl: product100, date: "FLG9010-M", text: "MEASURING TAPE", category: "Category 2", agwera: "agwera 100" },
    { imgUrl: product101, date: "FLG9316-M", text: "MEASURING TAPE", category: "Category 3", agwera: "agwera 101" },
    { imgUrl: product102, date: "FLG9519-M", text: "MEASURING TAPE", category: "Category 1", agwera: "agwera 102" },
    { imgUrl: product103, date: "FLG9525-M", text: "MEASURING TAPE", category: "Category 2", agwera: "agwera 103" },
    { imgUrl: product104, date: "FMP3PC", text: "3PCS WOOD CHISEL SET-SHORT", category: "Category 3", agwera: "agwera 104" },
    { imgUrl: product105, date: "FUM05U", text: "PUMP SPRAYER", category: "Category 1", agwera: "agwera 105" },
    { imgUrl: product106, date: "GAB202", text: "HEAVY DUTY BOOTLE JACK", category: "Category 2", agwera: "agwera 106" },
    { imgUrl: product107, date: "GAB204", text: "HEAVY DUTY BOOTLE JACK", category: "Category 3", agwera: "agwera 107" },
    { imgUrl: product108, date: "GAB206", text: "HEAVY DUTY BOOTLE JACK", category: "Category 1", agwera: "agwera 108" },
    { imgUrl: product109, date: "GAB208", text: "HEAVY DUTY BOOTLE JACK", category: "Category 2", agwera: "agwera 109" },
    { imgUrl: product110, date: "GAB212", text: "HEAVY DUTY BOOTLE JACK", category: "Category 3", agwera: "agwera 110" },
    { imgUrl: product111, date: "GAM03U", text: "HYDRAULIC FLOOR JACK", category: "Category 1", agwera: "agwera 111" },
    { imgUrl: product112, date: "GAT02U", text: "SCISSORS JACK", category: "Category 2", agwera: "agwera 112" },
    { imgUrl: product113, date: "GBA013", text: "13PCS HOBBY KNIFE SET", category: "Category 3", agwera: "agwera 113" },
    { imgUrl: product114, date: "GBU12M", text: "12PCS CARVING CHISEL SET", category: "Category 1", agwera: "agwera 114" },
    { imgUrl: product115, date: "GDS16U", text: "WELDING GLOVES", category: "Category 2", agwera: "agwera 115" },
    { imgUrl: product116, date: "GEG2500-PA", text: "GASOLINE GENERATOR", category: "Category 3", agwera: "agwera 116" },
    { imgUrl: product117, date: "HAU60F", text: "AXE WITH FIBERGLASS HANDLE", category: "Category 1", agwera: "agwera 117" },
    { imgUrl: product118, date: "HAU80F", text: "AXE WITH FIBERGLASS HANDLE", category: "Category 2", agwera: "agwera 118" },
    { imgUrl: product119, date: "LAT05U", text: "WORKING LAMP", category: "Category 3", agwera: "agwera 119" },
    { imgUrl: product120, date: "LES003", text: "WELDING GOGGLES", category: "Category 1", agwera: "agwera 120" },
    { imgUrl: product121, date: "LES01U", text: "AUTO DARKENING WELDING GOGGLES", category: "Category 2", agwera: "agwera 121" },
    { imgUrl: product122, date: "LJ380BD", text: "2PCS SANDING BELT SET", category: "Category 3", agwera: "agwera 122" },
    { imgUrl: product123, date: "LJ4100BD", text: "2PCS SANDING BELT SET", category: "Category 1", agwera: "agwera 123" },
    { imgUrl: product124, date: "LJ4120BD", text: "2PCS SANDING BELT SET", category: "Category 2", agwera: "agwera 124" },
    { imgUrl: product125, date: "LJ460BD", text: "2PCS SANDING BELT SET", category: "Category 3", agwera: "agwera 125" },
    { imgUrl: product126, date: "LJ480BD", text: "2PCS SANDING BELT SET", category: "Category 1", agwera: "agwera 126" },
    { imgUrl: product127, date: "LJM05U", text: "TILE GROUT FLOAT", category: "Category 2", agwera: "agwera 127" },
    { imgUrl: product128, date: "MAC02U", text: "ALUMINIUM HAND EDGER", category: "Category 3", agwera: "agwera 128" },
    { imgUrl: product129, date: "MAG002", text: "DEAD BLOW HAMMER", category: "Category 1", agwera: "agwera 129" },
    { imgUrl: product130, date: "MAMC08", text: "MINI CLAW HAMMER", category: "Category 2", agwera: "agwera 130" },
    { imgUrl: product131, date: "MAPS300", text: "WELDING HAMMER W/SPRING HANDLE", category: "Category 3", agwera: "agwera 131" },
    { imgUrl: product132, date: "MAQ1500", text: "MACHINIST HAMMER", category: "Category 1", agwera: "agwera 132" },
    { imgUrl: product133, date: "MAQ2000", text: "MACHINIST HAMMER", category: "Category 2", agwera: "agwera 133" },
    { imgUrl: product134, date: "MCD006", text: "HACKSAW FRAME", category: "Category 3", agwera: "agwera 134" },
    { imgUrl: product135, date: "MCN008", text: "ADJUSTABLE HACKSAW FRAME", category: "Category 1", agwera: "agwera 135" },
    { imgUrl: product136, date: "MDR13P", text: "3PCS 13MM KEY CHUCK SET", category: "Category 2", agwera: "agwera 136" },
    { imgUrl: product137, date: "MQL110U", text: "HIGH PRESSURE WASHER", category: "Category 3", agwera: "agwera 137" },
    { imgUrl: product138, date: "MQL90PC", text: "HIGH PRESSURE WASHER", category: "Category 1", agwera: "agwera 138" },
    { imgUrl: product139, date: "MSF01U", text: "FACE SHIELD", category: "Category 2", agwera: "agwera 139" },
    { imgUrl: product140, date: "NAP008", text: "MINI BOLT CUTTER", category: "Category 3", agwera: "agwera 140" },
    { imgUrl: product141, date: "NII012", text: "MAGNETIC SPIRIT LEVEL", category: "Category 1", agwera: "agwera 141" },
    { imgUrl: product142, date: "NII024", text: "MAGNETIC SPIRIT LEVEL", category: "Category 2", agwera: "agwera 142" },
    { imgUrl: product143, date: "NIV712", text: "MAGNETIC ALUMINUM SPIRIT LEVEL", category: "Category 3", agwera: "agwera 143" },
    { imgUrl: product144, date: "NIV716", text: "MAGNETIC ALUMINUM SPIRIT LEVEL", category: "Category 1", agwera: "agwera 144" },
    { imgUrl: product145, date: "NIV724", text: "MAGNETIC ALUMINUM SPIRIT LEVEL", category: "Category 2", agwera: "agwera 145" },
    { imgUrl: product146, date: "NIV740", text: "MAGNETIC ALUMINUM SPIRIT LEVEL", category: "Category 3", agwera: "agwera 146" },
    { imgUrl: product147, date: "NIV748", text: "MAGNETIC ALUMINUM SPIRIT LEVEL", category: "Category 1", agwera: "agwera 147" },
    { imgUrl: product148, date: "PDM276", text: "276PCS ACCESSORIES FOR MINI GRINDER", category: "Category 2", agwera: "agwera 148" },
    { imgUrl: product149, date: "PEL07U", text: "2 IN 1 WIRE STRIPPER", category: "Category 3", agwera: "agwera 149" },
    { imgUrl: product150, date: "PL001U", text: "SINGLE WHEEL HOOK PULLEY", category: "Category 1", agwera: "agwera 150" },
    { imgUrl: product151, date: "PRE268U", text: "QUICK JAW CORNER CLAMP", category: "Category 2", agwera: "agwera 151" },
    { imgUrl: product152, date: "PRE68U", text: "SWING JAW CORNER CLAMP", category: "Category 3", agwera: "agwera 152" },
    { imgUrl: product153, date: "PRR103", text: "SPRING CLAMP", category: "Category 1", agwera: "agwera 153" },
    { imgUrl: product154, date: "PRR104", text: "SPRING CLAMP", category: "Category 2", agwera: "agwera 154" },
    { imgUrl: product155, date: "PRR106", text: "SPRING CLAMP", category: "Category 3", agwera: "agwera 155" },
    { imgUrl: product156, date: "PRR109", text: "SPRING CLAMP", category: "Category 1", agwera: "agwera 156" },
    { imgUrl: product157, date: "PSMTG8-M", text: "AIR INFLATING GUN", category: "Category 2", agwera: "agwera 157" },
    { imgUrl: product158, date: "PSP315", text: "HOT GLUE GUN", category: "Category 3", agwera: "agwera 158" },
    { imgUrl: product159, date: "PSP340", text: "HOT GLUE GUN", category: "Category 1", agwera: "agwera 159" },
    { imgUrl: product160, date: "PTA15U", text: "ALUMINIUM CAULKING GUN", category: "Category 2", agwera: "agwera 160" },
    { imgUrl: product161, date: "PTE300U", text: "ELECTRODE HOLDER", category: "Category 3", agwera: "agwera 161" },
    { imgUrl: product162, date: "PTF009", text: "CAULKING GUN", category: "Category 1", agwera: "agwera 162" },
    { imgUrl: product163, date: "PTS10U", text: "CAULK GUN", category: "Category 2", agwera: "agwera 163" },
    { imgUrl: product164, date: "PTS16U", text: "CAULKING GUN", category: "Category 3", agwera: "agwera 164" },
    { imgUrl: product165, date: "PZS300", text: "WELDING GROUND CLAMP", category: "Category 1", agwera: "agwera 165" },
    { imgUrl: product166, date: "PZS500", text: "WELDING GROUND CLAMP", category: "Category 2", agwera: "agwera 166" },
    { imgUrl: product167, date: "REJ001", text: "FOLDING HAND RIVETER", category: "Category 3", agwera: "agwera 167" },
    { imgUrl: product168, date: "RLU602", text: "6PCS PRECISION SCREWDRIVER SET", category: "Category 1", agwera: "agwera 168" },
    { imgUrl: product169, date: "SCV036", text: "NAIL PULLER", category: "Category 2", agwera: "agwera 169" },
    { imgUrl: product170, date: "SMS03U", text: "WELDING MAGNET", category: "Category 3", agwera: "agwera 170" },
    { imgUrl: product171, date: "SP1012-M", text: "PAINT SPRAY GUN", category: "Category 1", agwera: "agwera 171" },
    { imgUrl: product172, date: "SP1740-M", text: "PAINT SPRAY GUN", category: "Category 2", agwera: "agwera 172" },
    { imgUrl: product173, date: "SPA05U", text: "5PCS AIR TOOLS SET", category: "Category 3", agwera: "agwera 173" },
    { imgUrl: product174, date: "SPL011", text: "DUST BLOWING GUN", category: "Category 1", agwera: "agwera 174" },
    { imgUrl: product175, date: "SPL01B-M", text: "WASHING GUN", category: "Category 2", agwera: "agwera 175" },
    { imgUrl: product176, date: "SRP06U", text: "WALL BOARD SAW", category: "Category 3", agwera: "agwera 176" },
    { imgUrl: product177, date: "SRPM12", text: "PRUNING SAW", category: "Category 1", agwera: "agwera 177" },
    { imgUrl: product178, date: "SRPP18", text: "FOLDED SAW", category: "Category 2", agwera: "agwera 178" },
    { imgUrl: product179, date: "TJB01U", text: "PVC PIPE CUTTER", category: "Category 3", agwera: "agwera 179" },
    { imgUrl: product180, date: "TJB02U", text: "PVC PIPE CUTTER", category: "Category 1", agwera: "agwera 180" },
    { imgUrl: product181, date: "TJD012", text: "HOUSEHOLD SCISSORS", category: "Category 2", agwera: "agwera 181" },
    { imgUrl: product182, date: "TJP408", text: "PRUNING SHEAR", category: "Category 3", agwera: "agwera 182" },
    { imgUrl: product183, date: "TJP85D", text: "PRUNING SHEAR", category: "Category 1", agwera: "agwera 183" },
    { imgUrl: product184, date: "TJP85P", text: "HEAVY DUTY PRUNING SHEAR", category: "Category 2", agwera: "agwera 184" },
    { imgUrl: product185, date: "TMB02N", text: "2PCS BATTERY CLAMP SET", category: "Category 3", agwera: "agwera 185" },
    { imgUrl: product186, date: "TNA308", text: "GERMAN TYPE END - CUTTING PLIERS", category: "Category 1", agwera: "agwera 186" },
    { imgUrl: product187, date: "TOB204", text: "BENCH VISE", category: "Category 2", agwera: "agwera 187" },
    { imgUrl: product188, date: "TRA020", text: "20PCS TAP AND DIE SET (PLASTIC BOX)", category: "Category 3", agwera: "agwera 188" },
    { imgUrl: product189, date: "TRA801", text: "8PCS TAP SET", category: "Category 1", agwera: "agwera 189" },
    { imgUrl: product190, date: "TRA802", text: "8PCS DIE SET", category: "Category 2", agwera: "agwera 190" },
    { imgUrl: product191, date: "TSD830B", text: "DIGITAL MULTI-METER", category: "Category 3", agwera: "agwera 191" },
    { imgUrl: product192, date: "TSV01U", text: "AC VOLTAGE DETECTOR", category: "Category 1", agwera: "agwera 192" },
    { imgUrl: product193, date: "TUP12U", text: "12PCS 1/2 RATCHET WRENCH AND SOCKET SET", category: "Category 2", agwera: "agwera 193" },
    { imgUrl: product194, date: "TUP13U", text: "13PCS 1/4 RATCHET WRENCH AND SOCKET SET", category: "Category 3", agwera: "agwera 194" },
    { imgUrl: product195, date: "UY-AMA02-125R", text: "ANGLE GRINDER", category: "Category 1", agwera: "agwera 195" },
    { imgUrl: product196, date: "UY-DRM041", text: "MINI GRINDER", category: "Category 2", agwera: "agwera 196" },
    { imgUrl: product197, date: "UY-PSC02-2000", text: "HEAT GUN", category: "Category 3", agwera: "agwera 197" },
    { imgUrl: product198, date: "UY-PSC2000", text: "HEAT GUN", category: "Category 1", agwera: "agwera 198" },
    { imgUrl: product199, date: "YAX018", text: "18PCS HEX KEY SET", category: "Category 2", agwera: "agwera 199" },
    { imgUrl: product200, date: "YCE102U", text: "1/2 RATCHET WRENCH", category: "Category 3", agwera: "agwera 200" },
    { imgUrl: product201, date: "YCE104U", text: "1/4 RATCHET WRENCH ", category: "Category 1", agwera: "agwera 201" },
    { imgUrl: product202, date: "YFP010", text: "ADJUSTABLE WRENCH", category: "Category 2", agwera: "agwera 202" },
    { imgUrl: product203, date: "YTM8SU", text: "UNIVERSAL SOCKET WRENCH", category: "Category 3", agwera: "agwera 203" }
  ];

  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter(article =>
    (selectedCategory === 'all' || article.category === selectedCategory) && 
    article.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  };

  const getPaginationButtons = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  // Calculate the articles to show on the current page
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <div className="container">
      <div className="search">
        <span className="search-icon material-symbols-outlined">search</span>
        <input
          className="search-input"
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="categories">
        <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}>yvela productis naxva</button>
        <button className={selectedCategory === 'category1' ? 'active' : ''} onClick={() => handleCategoryChange('category1')}>Pirveli Kategoria</button>
        <button className={selectedCategory === 'category2' ? 'active' : ''} onClick={() => handleCategoryChange('category2')}>Meore kategoria</button>
        {/* Add more buttons for other categories as needed */}
      </div>

      <div className="gpt3__blog-container_groupB">
        {currentArticles.map((article, index) => (
          <Article
            key={index}
            imgUrl={article.imgUrl}
            date={article.date}
            text={article.text}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {getPaginationButtons().map((page, index) => (
          <button
            key={index}
            className={currentPage === page ? 'active' : ''}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
